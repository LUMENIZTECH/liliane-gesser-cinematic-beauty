import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Cursor } from "@/components/Cursor";
import { Particles } from "@/components/Particles";
import {
  brand,
  contact,
  media,
  stats,
  marqueeItems,
  about,
  services,
  portfolioItems,
  experience,
  testimonials,
  navLinks,
  cta,
  visuals,
} from "@/data/content";

// Tudo o que é texto, imagem ou link vive em `src/data/content.ts`.
// Este arquivo cuida apenas da composição visual e das animações.

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: `${brand.name} — ${brand.tagline}` },
      {
        name: "description",
        content:
          "Maquiadora especialista em noivas. +5.000 atendimentos, +1.000 alunos, 16 anos de experiência. Atendimento exclusivo da Serra ao Litoral de Santa Catarina.",
      },
      { property: "og:title", content: `${brand.name} — ${brand.tagline}` },
      {
        property: "og:description",
        content:
          "Maquiagem que eterniza momentos únicos. Especialista em noivas em Santa Catarina.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  return (
    <main className="bg-background text-foreground">
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}

// ---------- NAV ----------
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "py-4 backdrop-blur-xl bg-background/40 border-b border-border" : "py-6"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#top" className="inline-flex items-center">
          {brand.logo ? (
            <img src={brand.logo} alt={brand.name} className="h-10 w-auto" />
          ) : (
            <span className="font-display text-xl tracking-[0.3em] text-foreground">
              {brand.initials}
            </span>
          )}
        </a>
        <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-foreground transition-colors duration-500"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] tracking-[0.3em] uppercase text-foreground border-b border-gold pb-1 hover:text-gold transition-colors duration-500"
        >
          Agendar
        </a>
      </div>
    </motion.header>
  );
}

// ---------- HERO ----------
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] w-full overflow-hidden bg-onyx">
      <motion.div style={{ scale }} className="absolute inset-0">
        {/* HERO VIDEO: usa `media.heroVideo` com `poster` como fallback */}
        <video
          className="absolute inset-0 h-full w-full object-cover ken-burns"
          src={media.heroVideo}
          poster={media.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src={media.heroVideo} type="video/mp4" />
          {/* Fallback para navegadores que não suportam <video> */}
          <img src={media.heroPoster} alt="Liliane Gesser" className="h-full w-full object-cover" />
        </video>
        {/* Overlay cinematográfico */}
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/50 via-onyx/30 to-onyx" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/80 via-transparent to-onyx/50" />
        <div className="absolute inset-0 bg-onyx/20" />
      </motion.div>

      <Particles count={50} />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="h-px w-12 bg-gold" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold">{brand.eyebrow}</span>
        </motion.div>

        <h1 className="font-display text-[18vw] md:text-[11vw] leading-[0.85] tracking-tight">
          {"Liliane".split("").map((c, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block shimmer-text"
            >
              {c}
            </motion.span>
          ))}
          <br />
          <span className="italic font-serif font-light text-[16vw] md:text-[10vw]">
            {"Gesser".split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block gradient-gold"
              >
                {c}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-[1400px]"
        >
          <p className="font-serif italic text-2xl md:text-3xl text-foreground/90 max-w-xl leading-snug whitespace-pre-line">
            {brand.heroSubtitle}
          </p>
          <GoldButton href={contact.whatsapp} label={cta.hero} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-muted-foreground"
      >
        <span>Scroll</span>
        <span className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}

// ---------- BOTÃO REUTILIZÁVEL ----------
function GoldButton({
  href,
  label,
  size = "md",
}: {
  href: string;
  label: string;
  size?: "md" | "lg";
}) {
  const pad = size === "lg" ? "px-12 py-7" : "px-8 py-5";
  const text =
    size === "lg" ? "font-display text-2xl tracking-[0.3em]" : "text-[11px] tracking-[0.4em]";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-hover
      className={`group relative inline-flex items-center gap-4 ${pad} border border-gold/60 hover:border-gold ${
        size === "lg" ? "glow-gold" : ""
      } overflow-hidden transition-all duration-500`}
    >
      <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
      <span
        className={`relative ${text} uppercase group-hover:text-onyx transition-colors duration-500`}
      >
        {label}
      </span>
      <svg
        className="relative w-4 h-4 group-hover:text-onyx group-hover:translate-x-1 transition-all duration-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}

// ---------- MARQUEE ----------
function Marquee() {
  return (
    <section className="relative py-10 border-y border-border overflow-hidden bg-onyx">
      <div className="flex gap-16 animate-[scroll_40s_linear_infinite] whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((t, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-4xl text-foreground/40 flex items-center gap-16"
          >
            {t}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { to { transform: translateX(-33.33%); } }`}</style>
    </section>
  );
}

// ---------- REVEAL HELPER ----------
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ---------- ABOUT ----------
function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 100]);

  return (
    <section ref={ref} id="sobre" className="relative py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5 relative md:sticky md:top-32 self-start">
          <div className="relative aspect-[3/4] overflow-hidden">
            <motion.img
              src={media.aboutImage}
              alt={brand.name}
              style={{ y: imgY }}
              className="absolute inset-0 w-full h-[120%] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 font-display text-7xl text-gold/80">
            {brand.initials}
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
                {about.eyebrow}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-10">
              {about.title.line1}
              <br />
              <span className="italic font-serif gradient-gold">{about.title.line2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-serif text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6">
              {about.paragraph1}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl">
              {about.paragraph2}
            </p>
          </Reveal>

          <div className="grid grid-cols-3 gap-6 md:gap-10 pt-10 border-t border-border">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={0.1 * i}>
                <div>
                  <div className="font-display text-4xl md:text-6xl gradient-gold">{s.n}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-3">
                    {s.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SERVICES ----------
function Services() {
  return (
    <section id="servicos" className="relative py-32 md:py-48 px-6 md:px-16 bg-onyx">
      <Particles count={20} />
      <div className="max-w-[1500px] mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Serviços</span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl leading-none">
                O Atelier da
                <br />
                <span className="italic font-serif gradient-gold">Beleza</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.08}>
              <div
                data-hover
                className="group relative aspect-[4/5] overflow-hidden glass cursor-pointer"
              >
                <img
                  src={s.img}
                  alt={s.t}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/50 to-transparent" />
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div className="text-[10px] tracking-[0.4em] text-gold">{s.n}</div>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl mb-3">{s.t}</h3>
                    <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">{s.d}</p>
                    <div className="mt-6 h-px w-12 bg-gold group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PORTFOLIO ----------
function Portfolio() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="portfolio" className="relative py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1500px] mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Portfólio</span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl leading-none">
                Obras em
                <br />
                <span className="italic font-serif gradient-gold">pele e luz.</span>
              </h2>
            </div>
            <p className="font-serif italic text-lg text-muted-foreground max-w-sm">
              Uma curadoria de momentos eternizados — cada rosto, uma assinatura.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
          {portfolioItems.map((it, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div
                data-hover
                onClick={() => setOpen(it.image)}
                className={`group relative overflow-hidden cursor-pointer ${
                  it.tall ? "row-span-2 aspect-[3/5]" : "aspect-[3/4]"
                }`}
              >
                <img
                  src={it.image}
                  alt={it.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/40 transition-colors duration-700" />
                <div className="absolute inset-0 p-6 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div>
                    <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-2">
                      {it.category}
                    </div>
                    <div className="font-display text-2xl">{it.title}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[80] bg-onyx/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-pointer"
        >
          <motion.img
            initial={{ scale: 0.92 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            src={open}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </motion.div>
      )}
    </section>
  );
}

// ---------- EXPERIENCE ----------
function Experience() {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-16 bg-onyx overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src={visuals.experienceBackground}
          alt="Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/80 to-onyx" />
      </div>
      <div className="relative max-w-[1400px] mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
                Experiência Premium
              </span>
              <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl">
              Um ritual <span className="italic font-serif gradient-gold">à parte.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {experience.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.1}>
              <div
                data-hover
                className="group glass p-10 h-full hover:bg-gold/5 transition-colors duration-700"
              >
                <div className="text-gold font-display text-3xl mb-6">0{i + 1}</div>
                <h3 className="font-display text-2xl mb-4">{it.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
                <div className="mt-8 h-px hairline" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- TESTIMONIALS ----------
function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="depoimentos" className="relative py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1100px] mx-auto text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Depoimentos</span>
            <span className="h-px w-10 bg-gold" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="font-display text-6xl md:text-8xl gradient-gold mb-12">"</div>
        </Reveal>
        <div className="relative min-h-[260px]">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={false}
              animate={{ opacity: i === idx ? 1 : 0, y: i === idx ? 0 : 20 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
              style={{ pointerEvents: i === idx ? "auto" : "none" }}
            >
              <p className="font-serif italic text-2xl md:text-4xl leading-snug text-foreground/90 mb-10">
                {t.t}
              </p>
              <div className="text-[11px] tracking-[0.4em] uppercase text-gold">{t.n}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-2">
                {t.r}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              data-hover
              aria-label={`Depoimento ${idx + 1}`}
              className={`h-px transition-all duration-500 ${
                i === idx ? "w-12 bg-gold" : "w-6 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- FINAL CTA ----------
function FinalCTA() {
  return (
    <section className="relative py-40 md:py-56 px-6 md:px-16 overflow-hidden bg-onyx">
      <div className="absolute inset-0">
        <img
          src={visuals.finalCtaBackground}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-40 ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/60 to-onyx" />
      </div>
      <Particles count={40} />
      <div className="relative max-w-[1200px] mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.9] mb-10 whitespace-pre-line">
            {cta.finalTitle.split("\n")[0]}
            <br />
            <span className="italic font-serif gradient-gold">{cta.finalTitle.split("\n")[1]}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-serif italic text-xl md:text-2xl text-foreground/70 max-w-xl mx-auto mb-14">
            {cta.finalSub}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <GoldButton href={contact.whatsapp} label={cta.final} size="lg" />
        </Reveal>
      </div>
    </section>
  );
}

// ---------- FOOTER ----------
function Footer() {
  return (
    <footer className="relative border-t border-border px-6 md:px-16 py-20">
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-3 gap-12 mb-20">
        <div>
          <div className="font-display text-3xl mb-4">{brand.name}</div>
          <p className="font-serif italic text-muted-foreground max-w-xs">
            {brand.tagline} {brand.location}.
          </p>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-5">Navegação</div>
          <ul className="space-y-3 font-serif text-lg">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-gold transition-colors duration-500">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-5">Contato</div>
          <ul className="space-y-3 font-serif text-lg">
            <li>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors duration-500"
              >
                {contact.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors duration-500"
              >
                WhatsApp · {contact.whatsappLabel}
              </a>
            </li>
            <li className="text-muted-foreground text-sm">{brand.shortLocation}</li>
          </ul>
        </div>
      </div>
      <div className="hairline h-px mb-8" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        <div>
          © {new Date().getFullYear()} {brand.name} — Todos os direitos reservados
        </div>
        <div>LILIANE GESSER · SC</div>
      </div>
    </footer>
  );
}
