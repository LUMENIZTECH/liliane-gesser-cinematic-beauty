import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Cursor } from "@/components/Cursor";
import { Particles } from "@/components/Particles";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

const WA = "https://wa.me/5548999458732";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Liliane Gesser — Maquiando e realizando sonhos" },
      { name: "description", content: "Maquiadora especialista em noivas. +5.000 atendimentos, +1.000 alunos, 16 anos de experiência. Atendimento exclusivo da Serra ao Litoral de Santa Catarina." },
      { property: "og:title", content: "Liliane Gesser — Maquiando e realizando sonhos" },
      { property: "og:description", content: "Maquiagem que eterniza momentos únicos. Especialista em noivas em Santa Catarina." },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "py-4 backdrop-blur-xl bg-background/40 border-b border-border" : "py-6"}`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-[0.3em] text-foreground">LG</a>
        <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
          <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
          <a href="#portfolio" className="hover:text-foreground transition-colors">Portfólio</a>
          <a href="#depoimentos" className="hover:text-foreground transition-colors">Depoimentos</a>
        </nav>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="text-[11px] tracking-[0.3em] uppercase text-foreground border-b border-gold pb-1 hover:text-gold transition-colors">
          Agendar
        </a>
      </div>
    </motion.header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] w-full overflow-hidden bg-onyx">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img src={heroImg} alt="Liliane Gesser maquiando noiva" className="absolute inset-0 w-full h-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/30 via-transparent to-onyx" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/70 via-transparent to-onyx/40" />
      </motion.div>
      <Particles count={50} />

      <motion.div style={{ y, opacity }} className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="h-px w-12 bg-gold" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Maquiadora · Santa Catarina</span>
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
          <p className="font-serif italic text-2xl md:text-3xl text-foreground/90 max-w-xl leading-snug">
            A maquiagem que eterniza<br />momentos únicos.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" data-hover
            className="group relative inline-flex items-center gap-4 px-8 py-5 border border-gold/60 hover:border-gold transition-all duration-500 overflow-hidden">
            <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <span className="relative text-[11px] tracking-[0.4em] uppercase group-hover:text-onyx transition-colors duration-500">Agendar Atendimento</span>
            <svg className="relative w-4 h-4 group-hover:text-onyx transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
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

function Marquee() {
  const items = ["Especialista em Noivas", "16 Anos de Experiência", "+5.000 Atendimentos", "+1.000 Alunos", "Da Serra ao Litoral SC"];
  return (
    <section className="relative py-10 border-y border-border overflow-hidden bg-onyx">
      <div className="flex gap-16 animate-[scroll_40s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-2xl md:text-4xl text-foreground/40 flex items-center gap-16">
            {t}<span className="text-gold">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { to { transform: translateX(-33.33%); } }`}</style>
    </section>
  );
}

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

function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 100]);

  const stats = [
    { n: "+5.000", l: "Atendimentos" },
    { n: "+1.000", l: "Alunas Formadas" },
    { n: "16", l: "Anos de Trajetória" },
  ];

  return (
    <section ref={ref} id="sobre" className="relative py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5 relative md:sticky md:top-32 self-start">
          <div className="relative aspect-[3/4] overflow-hidden">
            <motion.img
              src={aboutImg}
              alt="Liliane Gesser"
              style={{ y: imgY }}
              className="absolute inset-0 w-full h-[120%] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 font-display text-7xl text-gold/80">LG</div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">A Artista</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-10">
              Maquiando e<br /><span className="italic font-serif gradient-gold">realizando sonhos.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-serif text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6">
              Há mais de 15 anos, Liliane transforma a beleza em memória. Cada pincelada é um ritual; cada noiva, uma história que merece ser eternizada.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl">
              Especialista em noivas, atende da Serra ao Litoral de Santa Catarina com um padrão de excelência reconhecido por milhares de mulheres e profissionais formadas em seus cursos.
            </p>
          </Reveal>

          <div className="grid grid-cols-3 gap-6 md:gap-10 pt-10 border-t border-border">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={0.1 * i}>
                <div>
                  <div className="font-display text-4xl md:text-6xl gradient-gold">{s.n}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-3">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { n: "01", t: "Noivas", d: "Make exclusiva para o seu grande dia, do trial à última retoque.", img: p1 },
    { n: "02", t: "Maquiagem Social", d: "Festas, formaturas, eventos especiais com acabamento impecável.", img: p2 },
    { n: "03", t: "Penteados", d: "Penteados sob medida que dialogam com sua make e estilo.", img: p3 },
    { n: "04", t: "Cursos Profissionais", d: "Formação completa para futuras maquiadoras profissionais.", img: p4 },
    { n: "05", t: "Beauty Makeup", d: "Make beauty para ensaios fotográficos e produções editoriais.", img: p5 },
  ];

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
                O Atelier da<br /><span className="italic font-serif gradient-gold">Beleza</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.08}>
              <div data-hover className="group relative aspect-[4/5] overflow-hidden glass cursor-pointer">
                <img src={s.img} alt={s.t} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
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

function Portfolio() {
  const [open, setOpen] = useState<string | null>(null);
  const items = [
    { src: p1, cat: "Noivas", tall: true },
    { src: p2, cat: "Social" },
    { src: p6, cat: "Noivas" },
    { src: p3, cat: "Penteados" },
    { src: p4, cat: "Bastidores", tall: true },
    { src: p5, cat: "Beauty" },
  ];

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
                Obras em<br /><span className="italic font-serif gradient-gold">pele e luz.</span>
              </h2>
            </div>
            <p className="font-serif italic text-lg text-muted-foreground max-w-sm">
              Uma curadoria de momentos eternizados — cada rosto, uma assinatura.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div
                data-hover
                onClick={() => setOpen(it.src)}
                className={`group relative overflow-hidden cursor-pointer ${it.tall ? "row-span-2 aspect-[3/5]" : "aspect-[3/4]"}`}
              >
                <img src={it.src} alt={it.cat} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/30 transition-colors duration-700" />
                <div className="absolute inset-0 p-6 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div>
                    <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-2">{it.cat}</div>
                    <div className="font-display text-2xl">Ver imagem</div>
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
            initial={{ scale: 0.92 }} animate={{ scale: 1 }}
            src={open} alt="" className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </motion.div>
      )}
    </section>
  );
}

function Experience() {
  const items = [
    { t: "Atendimento Exclusivo", d: "Agenda limitada para garantir presença total em cada cliente." },
    { t: "Bastidores em Vídeo", d: "Cada produção é documentada com olhar cinematográfico." },
    { t: "Produtos de Alta Linha", d: "Curadoria de marcas internacionais de prestígio." },
    { t: "Equipe Própria", d: "Profissionais formadas pelos cursos da Liliane." },
  ];
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-16 bg-onyx overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={p4} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/80 to-onyx" />
      </div>
      <div className="relative max-w-[1400px] mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Experiência Premium</span>
              <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl">
              Um ritual <span className="italic font-serif gradient-gold">à parte.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.1}>
              <div data-hover className="group glass p-10 h-full hover:bg-gold/5 transition-colors duration-700">
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

function Testimonials() {
  const items = [
    { n: "Marina A.", r: "Noiva, 2024", t: "A Liliane não fez só minha maquiagem. Ela me fez sentir a noiva mais bonita do mundo. Lágrimas de emoção ao me ver no espelho." },
    { n: "Camila R.", r: "Aluna do curso", t: "O curso transformou minha carreira. Profundo, técnico e profundamente humano. Hoje atendo noivas graças a ela." },
    { n: "Júlia P.", r: "Noiva, 2023", t: "Cada detalhe pensado. Da pele que respirava à confiança que ela me passava. Uma artista no sentido mais sublime." },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [items.length]);

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
          {items.map((t, idx) => (
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
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-2">{t.r}</div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-16">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              data-hover
              aria-label={`Depoimento ${idx + 1}`}
              className={`h-px transition-all duration-500 ${i === idx ? "w-12 bg-gold" : "w-6 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-40 md:py-56 px-6 md:px-16 overflow-hidden bg-onyx">
      <div className="absolute inset-0">
        <img src={p6} alt="" loading="lazy" className="w-full h-full object-cover opacity-40 ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/60 to-onyx" />
      </div>
      <Particles count={40} />
      <div className="relative max-w-[1200px] mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.9] mb-10">
            Seu grande dia merece<br />
            <span className="italic font-serif gradient-gold">uma experiência inesquecível.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-serif italic text-xl md:text-2xl text-foreground/70 max-w-xl mx-auto mb-14">
            Agendas limitadas. Atendimento sob consulta.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a href={WA} target="_blank" rel="noopener noreferrer" data-hover
            className="group relative inline-flex items-center gap-6 px-12 py-7 border border-gold/60 glow-gold overflow-hidden">
            <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <span className="relative font-display text-2xl tracking-[0.3em] uppercase group-hover:text-onyx transition-colors duration-500">Agendar Agora</span>
            <svg className="relative w-5 h-5 group-hover:text-onyx transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border px-6 md:px-16 py-20">
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-3 gap-12 mb-20">
        <div>
          <div className="font-display text-3xl mb-4">Liliane Gesser</div>
          <p className="font-serif italic text-muted-foreground max-w-xs">
            Maquiando e realizando sonhos. Da Serra ao Litoral de Santa Catarina.
          </p>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-5">Navegação</div>
          <ul className="space-y-3 font-serif text-lg">
            <li><a href="#sobre" className="hover:text-gold transition-colors">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-gold transition-colors">Serviços</a></li>
            <li><a href="#portfolio" className="hover:text-gold transition-colors">Portfólio</a></li>
            <li><a href="#depoimentos" className="hover:text-gold transition-colors">Depoimentos</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-5">Contato</div>
          <ul className="space-y-3 font-serif text-lg">
            <li><a href="https://instagram.com/lilianegesser" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">@lilianegesser</a></li>
            <li><a href={WA} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">WhatsApp</a></li>
            <li className="text-muted-foreground text-sm">Santa Catarina · Brasil</li>
          </ul>
        </div>
      </div>
      <div className="hairline h-px mb-8" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        <div>© {new Date().getFullYear()} Liliane Gesser — Todos os direitos reservados</div>
        <div>Atelier de Beleza · SC</div>
      </div>
    </footer>
  );
}
