import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-tanker.jpg";
import approachImg from "@/assets/approach-ship.jpg";
import logoImg from "@/assets/vectra-logo.png";
import ogImage from "@/assets/og-image.png";
import { ArrowRight, Anchor, LineChart, Landmark, Mail, Linkedin, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vectra Maritime — Institutional Tanker Advisory" },
      { name: "description", content: "Bespoke advisory for institutional investors and shipowners. Vessel acquisitions, structured finance, and DCF-driven investment analysis across MR2–VLCC tankers." },
      { property: "og:title", content: "Vectra Maritime — Institutional Tanker Advisory" },
      { property: "og:description", content: "Delivering superior risk-adjusted returns in tanker markets." },
      { property: "og:image", content: ogImage },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
  }),
});

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-deep/60 border-b border-white/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 text-white">
          <img src={logoImg} alt="Vectra Maritime" className="h-9 w-9 object-contain opacity-90" />
          <span className="font-display text-xl tracking-tight">Vectra</span>
          <span className="text-gold-soft text-xs uppercase tracking-[0.3em] mt-1">Maritime</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-white/85">
          <a href="#capabilities" className="hover:text-gold-soft transition">Capabilities</a>
          <a href="#approach" className="hover:text-gold-soft transition">Approach</a>
          <a href="#metrics" className="hover:text-gold-soft transition">Metrics</a>
          <a href="#contact" className="hover:text-gold-soft transition">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-sm text-deep bg-gold-soft hover:bg-gold transition px-4 py-2 rounded">
          Engage <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Tanker at sea" className="w-full h-full object-cover animate-slow-zoom" width={1920} height={1280} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-3 text-gold text-[0.78rem] md:text-sm uppercase tracking-[0.35em] font-semibold mb-8 px-4 py-2 rounded-full bg-deep/40 backdrop-blur-md border border-gold/30 shadow-soft">
            <span className="h-px w-8 bg-gold" />
            Institutional Maritime Advisory
          </div>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
            Superior <em className="italic text-gold-soft font-light">risk-adjusted</em> returns in tanker markets.
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-light">
            Bespoke advisory for institutional investors and shipowners. We execute vessel acquisitions,
            structure complex financings, and optimize portfolios with rigorous DCF analysis, charter
            forecasting, and market intelligence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-gold-soft hover:bg-gold transition text-deep px-7 py-3.5 rounded text-sm font-medium tracking-wide">
              Engage Vectra <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#capabilities" className="inline-flex items-center gap-2 border border-white/30 hover:border-gold-soft hover:text-gold-soft transition text-white px-7 py-3.5 rounded text-sm font-medium tracking-wide">
              Our Capabilities
            </a>
          </div>
        </div>
      </div>
      <a href="#capabilities" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}

const capabilities = [
  {
    icon: Anchor,
    title: "Vessel Acquisition",
    desc: "Proprietary sourcing and valuation across MR2, LR2, Aframax, Suezmax, and VLCC opportunities. Full-cycle negotiation and institutional-grade due diligence.",
  },
  {
    icon: Landmark,
    title: "Structured Finance",
    desc: "Sale-leasebacks, senior debt, mezzanine, and hybrid solutions. Tailored to optimize capital structure and covenant packages.",
  },
  {
    icon: LineChart,
    title: "Investment Analysis",
    desc: "Comprehensive DCF modeling, ConTex/SCFI forecasting, sensitivity analysis, and residual value optimization across the cycle.",
  },
];

function Capabilities() {
  return (
    <section id="capabilities" className="py-28 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <div className="text-accent text-xs uppercase tracking-[0.4em] mb-6">01 — Capabilities</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-deep leading-[1.05]">
              Disciplined execution across the <em className="italic text-accent">tanker investment</em> lifecycle.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Three interlocking practices, one continuous mandate: deploy capital with conviction,
              structure it with precision, and validate every decision with quantitative rigor.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {capabilities.map((c) => (
            <div key={c.title} className="bg-background p-10 lg:p-12 group hover:bg-secondary transition-colors duration-500">
              <c.icon className="w-8 h-8 text-accent mb-8 group-hover:scale-110 transition-transform" strokeWidth={1.25} />
              <h3 className="text-2xl text-deep mb-4">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="relative py-28 lg:py-40 overflow-hidden" style={{ background: "var(--gradient-deep)" }}>
      <div className="absolute inset- 0 opacity-40">
        <img src={approachImg} alt="" className="w-full h-full object-cover" loading="lazy" width={1600} height={1200} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <div className="text-gold-soft text-xs uppercase tracking-[0.4em] mb-6">02 — Approach</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-8">
            Rigorous analysis. <em className="italic text-gold-soft">Institutional</em> execution. Deep market expertise.
          </h2>
          <p className="text-white/75 text-lg leading-relaxed">
            Every engagement is shaped by the same conviction: tanker markets reward those who pair
            quantitative discipline with experienced judgment.
          </p>
        </div>
        <div id="metrics" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/15">
          {[
            { k: "Tankers", v: "MR2 · LR2 · Aframax · Suezmax · VLCC", s: "Full segment coverage" },
            { k: "DCF", v: "Proprietary", s: "Cycle-tested modeling" },
            { k: "Athens", v: "Global Hub", s: "Maritime capital" },
            { k: "360°", v: "Lifecycle", s: "Acquisition to exit" },
          ].map((m) => (
            <div key={m.k} className="bg-white/10 backdrop-blur-sm p-8 lg:p-10">
              <div className="text-gold-soft text-xs uppercase tracking-[0.3em] mb-4">{m.k}</div>
              <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display mb-2">{m.v}</div>
              <div className="text-white/65 text-sm">{m.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-40 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div className="text-accent text-xs uppercase tracking-[0.4em] mb-6">03 — Engage</div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl text-deep leading-[1.05] mb-8">
          Engage with <em className="italic text-accent">Vectra</em>.
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-14">
          Direct line to principal. Confidential, mandate-driven conversations.
        </p>
        <div className="inline-flex flex-col items-center bg-secondary rounded-lg p-10 lg:p-14 shadow-[var(--shadow-soft)]">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Founder &amp; Principal</div>
          <div className="text-3xl md:text-4xl text-deep font-display mb-8">Dimitris Filippas</div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="mailto:df@vectramaritime.com" className="inline-flex items-center gap-2 bg-deep hover:bg-deep-2 text-white px-6 py-3 rounded transition text-sm">
              <Mail className="w-4 h-4" />
              <span>df@vectramaritime.com</span>
            </a>
            <a href="https://www.linkedin.com/in/dimitris-filippas-385793a/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border hover:border-accent hover:text-accent text-deep px-6 py-3 rounded transition text-sm">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-deep text-white/60 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="" className="h-7 w-7 object-contain opacity-80" />
          <span className="font-display text-white text-lg">Vectra</span>
          <span className="text-gold-soft text-[10px] uppercase tracking-[0.3em] mt-1">Maritime</span>
        </div>
        <div>© {new Date().getFullYear()} Vectra Maritime. All rights reserved.</div>
        <div>Athens · Global Maritime Hub</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <Capabilities />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}
