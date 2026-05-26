// ============================================================
//  CONTEÚDO EDITÁVEL — LILIANE GESSER
//  Altere apenas este arquivo para atualizar textos, links,
//  estatísticas, serviços, portfólio e depoimentos do site.
// ============================================================

import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

// -------- MARCA --------
export const brand = {
  name: "Liliane Gesser",
  initials: "LG",
  tagline: "Maquiando e realizando sonhos.",
  heroSubtitle: "A maquiagem que eterniza\nmomentos únicos.",
  location: "Da Serra ao Litoral de Santa Catarina",
  shortLocation: "Santa Catarina · Brasil",
  eyebrow: "Maquiadora · Santa Catarina",
};

// -------- CONTATO / REDES --------
// Substitua aqui o número/usuário para atualizar todos os CTAs.
export const contact = {
  whatsapp: "https://wa.me/5548999458732",
  whatsappLabel: "+55 48 99945-8732",
  instagram: "https://instagram.com/lilianegesser",
  instagramHandle: "@lilianegesser",
};

// -------- MÍDIA --------
// Substitua este vídeo pelo vídeo oficial da cliente em /public/videos/hero.mp4
export const media = {
  heroVideo: "/videos/hero.mp4",
  heroPoster: heroImg, // fallback enquanto o vídeo carrega
  aboutImage: aboutImg,
};

// -------- ESTATÍSTICAS --------
export const stats = [
  { n: "+5.000", l: "Atendimentos" },
  { n: "+1.000", l: "Alunas Formadas" },
  { n: "16", l: "Anos de Trajetória" },
];

// Frases do marquee superior
export const marqueeItems = [
  "Especialista em Noivas",
  "16 Anos de Experiência",
  "+5.000 Atendimentos",
  "+1.000 Alunos",
  "Da Serra ao Litoral SC",
];

// -------- SOBRE --------
export const about = {
  eyebrow: "A Artista",
  title: { line1: "Maquiando e", line2: "realizando sonhos." },
  paragraph1:
    "Há mais de 15 anos, Liliane transforma a beleza em memória. Cada pincelada é um ritual; cada noiva, uma história que merece ser eternizada.",
  paragraph2:
    "Especialista em noivas, atende da Serra ao Litoral de Santa Catarina com um padrão de excelência reconhecido por milhares de mulheres e profissionais formadas em seus cursos.",
};

// -------- SERVIÇOS --------
export const services = [
  { n: "01", t: "Noivas", d: "Make exclusiva para o seu grande dia, do trial ao último retoque.", img: p1 },
  { n: "02", t: "Maquiagem Social", d: "Festas, formaturas e eventos especiais com acabamento impecável.", img: p2 },
  { n: "03", t: "Penteados", d: "Penteados sob medida que dialogam com sua make e seu estilo.", img: p3 },
  { n: "04", t: "Cursos Profissionais", d: "Formação completa para futuras maquiadoras profissionais.", img: p4 },
  { n: "05", t: "Beauty Makeup", d: "Make beauty para ensaios fotográficos e produções editoriais.", img: p5 },
];

// -------- PORTFÓLIO --------
// Para trocar imagens: substitua o caminho `image` por uma URL ou import.
export const portfolioItems = [
  { title: "Noivas",      category: "Noivas",      image: p1, tall: true },
  { title: "Social",      category: "Social",      image: p2 },
  { title: "Noiva Clássica", category: "Noivas",   image: p6 },
  { title: "Penteado",    category: "Penteados",   image: p3 },
  { title: "Bastidores",  category: "Bastidores",  image: p4, tall: true },
  { title: "Beauty",      category: "Beauty",      image: p5 },
];

// -------- EXPERIÊNCIA PREMIUM --------
export const experience = [
  { t: "Atendimento Exclusivo", d: "Agenda limitada para garantir presença total em cada cliente." },
  { t: "Atendimento Personalizado", d: "Cada cliente recebe uma experiência exclusiva, pensada para valorizar sua beleza e seu momento especial." },
  { t: "Produtos de Alta Linha", d: "Curadoria de marcas internacionais de prestígio." },
  { t: "Experiência de 16 Anos", d: "Mais de uma década transformando autoestima, realizando sonhos e acompanhando momentos inesquecíveis." },
];

// -------- DEPOIMENTOS --------
export const testimonials = [
  { n: "Marina A.", r: "Noiva, 2024", t: "A Liliane não fez só minha maquiagem. Ela me fez sentir a noiva mais bonita do mundo. Lágrimas de emoção ao me ver no espelho." },
  { n: "Camila R.", r: "Aluna do curso", t: "O curso transformou minha carreira. Profundo, técnico e profundamente humano. Hoje atendo noivas graças a ela." },
  { n: "Júlia P.",  r: "Noiva, 2023", t: "Cada detalhe pensado. Da pele que respirava à confiança que ela me passava. Uma artista no sentido mais sublime." },
];

// -------- NAVEGAÇÃO --------
export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#depoimentos", label: "Depoimentos" },
];

// -------- CTAs --------
export const cta = {
  hero: "Agendar Atendimento",
  final: "Agendar Agora",
  finalTitle: "Seu grande dia merece\numa experiência inesquecível.",
  finalSub: "Agendas limitadas. Atendimento sob consulta.",
};
