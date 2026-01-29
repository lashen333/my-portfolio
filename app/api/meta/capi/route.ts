import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const payload = {
    data: [
      {
        event_name: body.event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id: body.event_id,
        action_source: body.action_source,
        event_source_url: body.event_source_url
      }
    ]
  };

  const url = `https://graph.facebook.com/v21.0/${process.env.META_CAPI_PIXEL_ID}/events?access_token=${process.env.META_CAPI_ACCESS_TOKEN}`;

  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  return NextResponse.json({ ok: r.ok });
}
