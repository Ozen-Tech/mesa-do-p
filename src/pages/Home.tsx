import { useEffect, useState } from "react";
import {
  BookOpen,
  Microscope,
  Utensils,
  Star,
  ChevronDown,
  Plus,
  Check,
  Mail,
  ShieldCheck,
  Clock,
} from "lucide-react";

const HOTMART_URL = "https://pay.hotmart.com/G105661402K?checkoutMode=2";

const ctaClasses =
  "hotmart-fb hotmart__button-checkout inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans font-medium tracking-wide transition-all duration-300 ease-out cursor-pointer";

type CtaProps = {
  variant?: "primary" | "outline" | "dark";
  children: React.ReactNode;
  className?: string;
};

function CTA({ variant = "primary", children, className = "" }: CtaProps) {
  const variants: Record<NonNullable<CtaProps["variant"]>, string> = {
    primary:
      "bg-accent text-foreground hover:bg-accent-300 shadow-gold hover:shadow-2xl hover:-translate-y-0.5",
    outline:
      "border-2 border-white/80 text-white hover:bg-white hover:text-foreground",
    dark: "bg-foreground text-accent hover:bg-secondary hover:text-white shadow-xl hover:-translate-y-0.5",
  };

  return (
    <a
      href={HOTMART_URL}
      onClick={(e) => {
        // O widget Hotmart intercepta o clique para abrir em modal.
        // Mantemos o href para fallback caso o script ainda nao tenha carregado.
        if (typeof window !== "undefined" && (window as any).hotmart) {
          e.preventDefault();
        }
      }}
      className={`${ctaClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-12 md:mb-16">
      {eyebrow && (
        <p
          className={`font-sans uppercase tracking-[0.3em] text-xs md:text-sm mb-4 ${
            light ? "text-accent" : "text-secondary"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display font-bold text-3xl md:text-5xl lg:text-6xl text-balance leading-tight ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      <div className="gold-divider mt-6" />
      {subtitle && (
        <p
          className={`font-serif italic text-lg md:text-xl mt-6 max-w-3xl mx-auto text-balance ${
            light ? "text-white/80" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: 'url("/images/hero-mesa.jpg")',
          transform: `translateY(${scrollY * 0.35}px) scale(1.1)`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(61,40,23,0.85) 0%, rgba(61,40,23,0.7) 40%, rgba(61,40,23,0.95) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center max-w-5xl mx-auto">
        <p className="font-sans uppercase tracking-[0.4em] text-accent text-xs md:text-sm mb-6 animate-fade-up">
          ✦ Edição Premium ✦
        </p>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-balance animate-fade-up">
          A Mesa dos
          <br />
          <span className="text-accent">Profetas</span>
        </h1>
        <p className="font-serif italic text-lg md:text-2xl mt-8 max-w-3xl text-white/90 text-balance animate-fade-up">
          21 Receitas Bíblicas Esquecidas que sustentaram reis, fortaleceram
          profetas e nutriram o próprio Filho de Deus.
        </p>
        <p className="font-sans text-base md:text-lg mt-4 max-w-2xl text-white/70 text-balance">
          Descubra os segredos alimentares da Bíblia e aplique-os na sua vida
          hoje — corpo, alma e espírito.
        </p>

        <div className="flex justify-center mt-10 animate-fade-up">
          <CTA variant="primary">Quero Meu Ebook Agora</CTA>
        </div>

        <p className="mt-8 font-sans text-xs uppercase tracking-widest text-white/60">
          Pagamento 100% seguro · Acesso imediato · Garantia de 7 dias
        </p>

        <a
          href="#poder"
          aria-label="Rolar para a próxima seção"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent animate-bounce-slow"
        >
          <ChevronDown className="w-8 h-8" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}

function PoderDaMesa() {
  return (
    <section
      id="poder"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-white to-background"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm text-secondary mb-4">
          O Segredo Perdido
        </p>
        <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-foreground text-balance leading-tight">
          O Poder da Mesa Bíblica
        </h2>
        <div className="gold-divider mt-6" />

        <p className="font-serif text-lg md:text-2xl text-foreground/90 mt-10 leading-relaxed text-balance">
          Imagine caminhar pelas ruas de Jerusalém há mais de dois mil anos. O
          ar quente carregando o aroma de figos maduros, o perfume amadeirado
          do azeite recém-prensado e o cheiro inconfundível do pão assando
          sobre pedras quentes.
        </p>

        <p className="font-serif text-lg md:text-xl text-muted mt-8 leading-relaxed text-balance">
          Naquela época, a comida não era apenas combustível. Era{" "}
          <strong className="text-foreground font-semibold">
            uma linguagem de amor, um ato de adoração e, muitas vezes, o
            próprio veículo do milagre.
          </strong>
        </p>

        <blockquote className="mt-12 px-6 py-8 border-l-4 border-accent bg-white/60 rounded-r-lg max-w-2xl mx-auto text-left">
          <p className="font-serif italic text-lg md:text-xl text-foreground leading-relaxed">
            “Eis que vos tenho dado toda a erva que dê semente, que está sobre
            a face de toda a terra; e toda a árvore, em que há fruto que dê
            semente, ser-vos-á para mantimento.”
          </p>
          <cite className="block mt-4 font-sans text-sm uppercase tracking-widest text-secondary not-italic">
            — Gênesis 1:29
          </cite>
        </blockquote>
      </div>
    </section>
  );
}

const RECEITAS = [
  {
    n: "01",
    titulo: "O Pão que Sustentou um Profeta por 430 Dias",
    sub: "Pão de Ezequiel · Ezequiel 4:9",
    desc: "A combinação divina de grãos e leguminosas que forma uma proteína completa. Sustento de Ezequiel durante o cerco babilônico.",
  },
  {
    n: "02",
    titulo: "O Guisado Vermelho que Mudou a História",
    sub: "Sopa de Lentilhas de Esaú · Gênesis 25:29",
    desc: "Rica em ferro e ácido fólico, esta sopa aveludada de lentilhas com cominho e cúrcuma é tão poderosa que mudou um destino.",
  },
  {
    n: "03",
    titulo: "O Remédio Doce do Rei Ezequias",
    sub: "Pasta de Figo · 2 Reis 20:7",
    desc: "A pasta cicatrizante que curou um rei à beira da morte. Rica em enzimas proteolíticas e potássio.",
  },
  {
    n: "04",
    titulo: "O Pão da Multiplicação",
    sub: "Pão de Cevada · João 6:9",
    desc: "O pão humilde dos pobres que, nas mãos de Jesus, alimentou cinco mil. Rico em beta-glucana, reduz colesterol naturalmente.",
  },
  {
    n: "05",
    titulo: "O Ensopado Restaurador dos Profetas",
    sub: "Ensopado de Grãos · 2 Reis 4:38",
    desc: "Bomba de fitoquímicos com grão-de-bico, batata doce e folhas verdes. Refeição completa para reunir a família.",
  },
  {
    n: "06",
    titulo: "O Manjar do Deserto",
    sub: "Bebida de Mel e Ervas · Mateus 3:4",
    desc: "Elixir calmante de João Batista. Mel puro, alecrim e hortelã para acalmar o sistema nervoso e fortalecer a imunidade.",
  },
];

function Receitas() {
  return (
    <section id="receitas" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Conteúdo do Ebook"
          title="21 Receitas Bíblicas Esquecidas"
          subtitle="Da sopa que mudou a história ao pão que multiplicou multidões — cada receita é uma janela para o sagrado."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {RECEITAS.map((r) => (
            <article
              key={r.n}
              className="group bg-white rounded-2xl p-8 border-l-4 border-accent shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/10 group-hover:bg-accent flex items-center justify-center transition-colors duration-300">
                  <span className="font-display font-bold text-2xl text-accent group-hover:text-white transition-colors duration-300">
                    {r.n}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground leading-snug">
                    {r.titulo}
                  </h3>
                  <p className="font-serif italic text-secondary mt-1 text-sm md:text-base">
                    {r.sub}
                  </p>
                  <p className="font-sans text-muted mt-4 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}

          <article className="md:col-span-2 bg-gradient-to-br from-foreground to-secondary text-white rounded-2xl p-10 text-center">
            <Plus className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl md:text-3xl">
              + 15 Receitas Restantes
            </h3>
            <p className="font-serif italic text-white/80 mt-3 text-lg">
              Da Galiléia ao Palácio de Salomão
            </p>
            <p className="font-sans text-white/70 mt-4 max-w-2xl mx-auto">
              Peixe da praia onde Jesus cozinhou, bolo de carvão de Elias, maná
              do deserto, romã de Salomão, tâmaras dos guerreiros, cordeiro da
              Páscoa, e o banquete final de leite e mel.
            </p>
          </article>
        </div>

        <div className="text-center mt-14">
          <CTA variant="primary">Explorar Todas as 21 Receitas</CTA>
        </div>
      </div>
    </section>
  );
}

const DIFERENCIAIS = [
  {
    icon: BookOpen,
    title: "Sabedoria Milenar",
    desc: "Cada receita é acompanhada por sua história bíblica completa, com versículo, contexto e reflexão espiritual profunda.",
  },
  {
    icon: Microscope,
    title: "Base Científica",
    desc: "Explicação nutricional moderna de por que cada combinação ancestral funciona. Fé e ciência em harmonia.",
  },
  {
    icon: Utensils,
    title: "Aplicação Prática",
    desc: "Ingredientes encontrados em qualquer mercado brasileiro. Modo de preparo passo a passo, simples e acessível.",
  },
];

function Diferenciais() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Por que este ebook é diferente"
          title="Mais que receitas. Uma experiência sagrada."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DIFERENCIAIS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group text-center bg-background/60 rounded-2xl p-8 border-2 border-transparent hover:border-accent hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground">
                {title}
              </h3>
              <p className="font-sans text-muted mt-4 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const MOCKUP_ITENS = [
  "21 receitas bíblicas com história, ciência e reflexão",
  "Plano alimentar completo de 7 dias — A Jornada do Profeta",
  "Lista de compras da Terra Prometida pronta para imprimir",
  "Bônus exclusivos: maná, manjar e banquete da promessa",
  "Reflexões espirituais que transformam cada refeição",
  "Explicação científica por trás de cada combinação ancestral",
  "Acesso imediato e vitalício em PDF — leia em qualquer dispositivo",
];

function MockupSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-background via-white to-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div
            className="absolute -inset-6 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <img
            src="/images/ebook-mockup.png"
            alt="Mockup 3D do ebook A Mesa dos Profetas"
            className="relative w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm text-secondary mb-4">
            O que você recebe
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground leading-tight text-balance">
            Tudo o que você precisa para retornar à mesa sagrada
          </h2>
          <div className="gold-divider mt-6 !mx-0" />

          <ul className="mt-10 space-y-4">
            {MOCKUP_ITENS.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span
                  className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center text-accent font-bold"
                  aria-hidden="true"
                >
                  ✦
                </span>
                <span className="font-sans text-foreground/90 text-base md:text-lg leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <CTA variant="primary">Acesse Agora</CTA>
          </div>
        </div>
      </div>
    </section>
  );
}

const TESTEMUNHOS = [
  {
    nome: "Maria Soares",
    cidade: "São Paulo, SP",
    texto:
      "Substituí o pão branco do café da manhã pelo Pão de Ezequiel e em duas semanas senti a diferença. Mais energia, menos fome no meio da manhã. Mas o que mais me tocou foi a reflexão antes de cada receita.",
  },
  {
    nome: "Pr. João Almeida",
    cidade: "Belo Horizonte, MG",
    texto:
      "Uso este material nos cultos de família. Cozinhar a Sopa de Lentilhas de Esaú enquanto leio o capítulo de Gênesis virou um momento sagrado em casa. Recomendo a todos os pastores.",
  },
  {
    nome: "Ana Carvalho",
    cidade: "Curitiba, PR",
    texto:
      "Não esperava que receitas trouxessem tanta paz. A bebida de mel e ervas do João Batista tornou-se meu ritual da noite. Vale cada centavo, e mais um pouco.",
  },
];

function Testemunhos() {
  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Quem já provou"
          title="Vidas transformadas à mesa"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTEMUNHOS.map((t) => (
            <article
              key={t.nome}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div
                className="flex gap-1 mb-5"
                aria-label="5 estrelas de avaliação"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    fill="#D4AF37"
                    stroke="#D4AF37"
                  />
                ))}
              </div>
              <p className="font-serif italic text-foreground/85 leading-relaxed flex-1">
                “{t.texto}”
              </p>
              <footer className="mt-6 pt-6 border-t border-foreground/10">
                <p className="font-display font-bold text-lg text-foreground">
                  {t.nome}
                </p>
                <p className="font-sans text-sm text-muted mt-0.5">
                  {t.cidade}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "Como recebo o ebook após a compra?",
    a: "Imediatamente. Após a confirmação do pagamento pela Hotmart, você recebe um e-mail com o link de acesso em PDF, que pode ser baixado quantas vezes quiser e lido em qualquer dispositivo (celular, tablet, computador, e-reader).",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Cartão de crédito (em até 12x), Pix, boleto bancário e PayPal. Todo o checkout é processado pela Hotmart, com criptografia de ponta a ponta e segurança bancária.",
  },
  {
    q: "Existe garantia? E se eu não gostar?",
    a: "Sim. Você tem 7 dias de garantia incondicional. Se não gostar do conteúdo por qualquer motivo, basta enviar um e-mail solicitando o reembolso e ele será processado integralmente — sem perguntas.",
  },
  {
    q: "Os ingredientes são fáceis de encontrar no Brasil?",
    a: "Sim. Todas as receitas usam ingredientes encontrados em supermercados, feiras livres e lojas de produtos naturais brasileiras. A lista de compras vem pronta para você levar ao mercado.",
  },
];

function FAQ() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-background to-white">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          eyebrow="Perguntas Frequentes"
          title="Antes de você se sentar à mesa"
        />

        <div className="space-y-4">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group bg-white border-l-4 border-accent rounded-r-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5">
                <h3 className="font-display font-bold text-lg md:text-xl text-foreground">
                  {f.q}
                </h3>
                <Plus
                  className="faq-icon w-5 h-5 text-accent flex-shrink-0"
                  strokeWidth={2.5}
                />
              </summary>
              <div className="px-6 pb-6 -mt-1">
                <p className="font-sans text-muted leading-relaxed">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section
      className="relative py-24 md:py-32 px-6 text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #3D2817 0%, #5C3A22 50%, #C67C4E 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 80% 80%, #D4AF37 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="font-sans uppercase tracking-[0.4em] text-accent text-xs md:text-sm mb-6">
          ✦ A mesa está posta ✦
        </p>
        <h2 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-balance leading-tight">
          Sente-se. O banquete está servido.
        </h2>
        <p className="font-serif italic text-lg md:text-2xl text-white/85 mt-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Resgate hoje os segredos alimentares que sustentaram reis,
          fortaleceram profetas e nutriram o próprio Filho de Deus.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
          <CTA variant="primary">Garantir Meu Ebook Agora</CTA>
          <a
            href="mailto:contato@mesadosprofetas.com"
            className={`${ctaClasses} border-2 border-white/70 text-white hover:bg-white hover:text-foreground`}
          >
            <Mail className="w-5 h-5" />
            Falar com o Autor
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm">
          <div className="flex items-center justify-center gap-2 text-white/80">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span>Pagamento seguro</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Clock className="w-5 h-5 text-accent" />
            <span>Acesso imediato</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Check className="w-5 h-5 text-accent" />
            <span>Garantia de 7 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/70 px-6 py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display font-bold text-2xl text-accent">
            ✦ A Mesa dos Profetas
          </p>
          <p className="font-serif italic text-sm mt-3 text-background/60 max-w-xs">
            21 Receitas Bíblicas Esquecidas. Edição Premium.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Navegação</h4>
          <ul className="space-y-2 font-sans text-sm">
            <li>
              <a href="#poder" className="hover:text-accent transition-colors">
                O Poder da Mesa
              </a>
            </li>
            <li>
              <a
                href="#receitas"
                className="hover:text-accent transition-colors"
              >
                As 21 Receitas
              </a>
            </li>
            <li>
              <a
                href={HOTMART_URL}
                className="hover:text-accent transition-colors"
              >
                Comprar Ebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Autor</h4>
          <p className="font-sans text-sm">
            Enzo Almeida Verde
            <br />
            <span className="text-background/50">
              Autor, Pesquisador e Curador
            </span>
          </p>
          <p className="font-sans text-sm mt-3">
            <a
              href="mailto:contato@mesadosprofetas.com"
              className="hover:text-accent transition-colors"
            >
              contato@mesadosprofetas.com
            </a>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-background/50">
        <p>
          © 2026 A Mesa dos Profetas — Edição Premium. Todos os direitos
          reservados.
        </p>
        <p>Inspirado nas Escrituras Sagradas.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <PoderDaMesa />
      <Receitas />
      <Diferenciais />
      <MockupSection />
      <Testemunhos />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
