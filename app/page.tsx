import Hero from "@/components/home/Hero";
import AboutBento from "@/components/home/AboutBento";
import ServicesStrip from "@/components/home/ServicesStrip";
import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <Hero />

      {/* About & Tech Stack */}
      <AboutBento />

      {/* Services */}
      <ServicesStrip />

      {/* Final CTA Strip */}
      <section className="py-24 text-center border-t border-white/5 bg-zinc-900/20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to scale your vision?</h2>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            Whether you need a full SaaS platform or a high-performance AI integration,
            I bring the engineering rigor to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto shadow-violet-500/20 shadow-lg">
                Start a Conversation
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto text-zinc-400 hover:text-white">
                View Past Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
