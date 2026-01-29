import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const pixelId = process.env.META_CAPI_PIXEL_ID;
    const token = process.env.META_CAPI_ACCESS_TOKEN;
    const apiVersion = process.env.META_CAPI_API_VERSION || "v21.0";

    if (!pixelId || !token) {
      return NextResponse.json(
        { ok: false, error: "Missing META_CAPI_PIXEL_ID or META_CAPI_ACCESS_TOKEN" },
        { status: 500 }
      );
    }

    const userAgent = req.headers.get("user-agent") || "";
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "";

    const payload = {
      data: [
        {
          event_name: body.event_name,                 // "Lead"
          event_time: Math.floor(Date.now() / 1000),
          event_id: body.event_id,                     // dedup key
          action_source: body.action_source || "website",
          event_source_url: body.event_source_url || "",
          user_data: {
            client_user_agent: userAgent,
            client_ip_address: ip,
          },
        },
      ],
    };

    const url = `https://graph.facebook.com/${apiVersion}/${pixelId}/events?access_token=${token}`;

    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const meta = await r.json();

    return NextResponse.json({ ok: r.ok, meta }, { status: r.ok ? 200 : 400 });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
