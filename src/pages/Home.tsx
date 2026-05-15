import { useEffect, useState } from "react";
import {
  BookOpen,
  Microscope,
  Utensils,
  Star,
  ChevronDown,
  Plus,
  Check,
  X,
  Mail,
  ShieldCheck,
  Clock,
  Flame,
  Gift,
  CreditCard,
  Award,
  ArrowRight,
  Heart,
  Sparkles,
} from "lucide-react";

const HOTMART_URL =
  "https://pay.hotmart.com/G105661402K?checkoutMode=10";

const PRICE_FROM = "127";
const PRICE_TO = "67";
const PRICE_INSTALLMENTS = "6,46";
const INSTALLMENTS_COUNT = "12";

const ctaClasses =
  "inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-4 sm:py-5 rounded-full font-sans font-bold tracking-wide transition-all duration-300 ease-out cursor-pointer uppercase text-sm sm:text-base";

type CtaProps = {
  variant?: "primary" | "secondary" | "huge";
  children: React.ReactNode;
  className?: string;
};

function CTA({ variant = "primary", children, className = "" }: CtaProps) {
  const variants: Record<NonNullable<CtaProps["variant"]>, string> = {
    primary:
      "bg-accent text-foreground hover:bg-accent-300 shadow-gold hover:shadow-2xl hover:-translate-y-0.5",
    secondary:
      "bg-foreground text-accent hover:bg-secondary hover:text-white shadow-xl hover:-translate-y-0.5",
    huge: "bg-gradient-to-r from-accent via-accent-300 to-accent text-foreground hover:scale-105 shadow-2xl text-base sm:text-xl px-8 sm:px-14 py-5 sm:py-6 animate-pulse-slow",
  };

  return (
    <a
      href={HOTMART_URL}
      className={`${ctaClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function CountdownTimer() {
  const [time, setTime] = useState({ h: 23, m: 59, s: 59 });

  useEffect(() => {
    const t = setInterval(() => {
      setTime((p) => {
        let s = p.s - 1;
        let m = p.m;
        let h = p.h;
        if (s < 0) {
          s = 59;
          m -= 1;
        }
        if (m < 0) {
          m = 59;
          h -= 1;
        }
        if (h < 0) {
          return { h: 23, m: 59, s: 59 };
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-1.5 sm:gap-2 font-mono font-bold text-lg sm:text-2xl tabular-nums">
      <span className="bg-foreground/90 text-accent px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md">
        {pad(time.h)}
      </span>
      <span className="text-foreground">:</span>
      <span className="bg-foreground/90 text-accent px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md">
        {pad(time.m)}
      </span>
      <span className="text-foreground">:</span>
      <span className="bg-foreground/90 text-accent px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md">
        {pad(time.s)}
      </span>
    </div>
  );
}

function UrgencyBar() {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-accent via-accent-300 to-accent text-foreground py-2.5 px-4 text-center">
      <p className="font-sans font-bold text-xs sm:text-sm uppercase tracking-wide flex items-center justify-center gap-2 flex-wrap">
        <Flame className="w-4 h-4 flex-shrink-0 animate-pulse" />
        <span>
          OFERTA POR TEMPO LIMITADO · DE R${PRICE_FROM} POR{" "}
          <span className="text-secondary">R${PRICE_TO}</span> · 50% OFF
        </span>
        <Flame className="w-4 h-4 flex-shrink-0 animate-pulse" />
      </p>
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
    <section className="relative min-h-[100vh] w-full overflow-hidden text-white">
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
            "linear-gradient(180deg, rgba(61,40,23,0.88) 0%, rgba(61,40,23,0.78) 40%, rgba(61,40,23,0.97) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-6 py-20 text-center max-w-5xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/40 text-accent text-xs sm:text-sm font-sans font-medium uppercase tracking-widest mb-6 animate-fade-up">
          <Sparkles className="w-3.5 h-3.5" />
          Edição Premium · Acesso Vitalício
        </span>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-balance animate-fade-up">
          DESCUBRA AS{" "}
          <span className="text-accent">21 RECEITAS BÍBLICAS</span>{" "}
          QUE A IGREJA ESQUECEU
        </h1>

        <p className="font-serif italic text-lg md:text-2xl mt-8 max-w-3xl text-white/95 text-balance animate-fade-up leading-relaxed">
          Os mesmos alimentos que sustentaram profetas no deserto, curaram reis
          à beira da morte e alimentaram multidões — agora adaptados para a
          cozinha brasileira moderna.
        </p>

        <div className="mt-8 inline-flex items-center gap-3 bg-foreground/40 backdrop-blur border border-accent/30 rounded-full px-5 py-2.5">
          <Flame className="w-5 h-5 text-accent animate-pulse" />
          <span className="font-sans text-sm text-white/90">
            Oferta encerra em:
          </span>
          <CountdownTimer />
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 animate-fade-up">
          <CTA variant="huge">
            <Gift className="w-5 h-5" />
            QUERO RESGATAR MEU EBOOK AGORA
          </CTA>
          <p className="font-sans text-sm text-white/80">
            De{" "}
            <span className="line-through text-white/60">R$ {PRICE_FROM}</span>{" "}
            por apenas{" "}
            <strong className="text-accent text-lg">R$ {PRICE_TO}</strong> · ou{" "}
            {INSTALLMENTS_COUNT}x de R$ {PRICE_INSTALLMENTS}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
          {[
            { icon: ShieldCheck, label: "Pagamento Seguro" },
            { icon: Clock, label: "Acesso Imediato" },
            { icon: Award, label: "Garantia 7 dias" },
            { icon: Heart, label: "+1000 Leitores" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5 text-xs sm:text-sm font-sans text-white/85"
            >
              <Icon className="w-5 h-5 text-accent" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <a
          href="#para-quem"
          aria-label="Rolar para a próxima seção"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-accent animate-bounce-slow"
        >
          <ChevronDown className="w-8 h-8" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}

const DORES = [
  {
    title: "Cansa(do) de dietas modernas que não funcionam?",
    desc: "Você já testou keto, jejum intermitente, dieta da lua... e nada traz a paz e a saúde que sua alma também precisa.",
  },
  {
    title: "Quer voltar à alimentação que Deus prescreveu?",
    desc: "A Bíblia revela exatamente o que sustentou os escolhidos por milênios. Comida real, simples e nutritiva.",
  },
  {
    title: "Procura uma cozinha com propósito sagrado?",
    desc: "Cada refeição vira oração. Cada prato, uma conexão profunda com a Palavra e com Quem te criou.",
  },
];

function ParaQuemE() {
  return (
    <section id="para-quem" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm text-secondary mb-4">
            Este Ebook é para você se...
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-balance leading-tight">
            Identifica-se com{" "}
            <span className="text-secondary">uma destas situações?</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DORES.map((d) => (
            <div
              key={d.title}
              className="bg-background/70 border-l-4 border-accent rounded-r-2xl p-6 hover:shadow-2xl transition-shadow"
            >
              <Check className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-display font-bold text-xl text-foreground leading-snug">
                {d.title}
              </h3>
              <p className="font-sans text-muted mt-3 leading-relaxed">
                {d.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-serif italic text-lg md:text-2xl text-foreground text-balance max-w-3xl mx-auto">
            Se você se vê em <strong className="not-italic">qualquer uma</strong> dessas situações, A Mesa dos Profetas é a{" "}
            <strong className="not-italic text-secondary">escolha perfeita</strong> para você.
          </p>
          <div className="mt-8">
            <CTA variant="primary">
              SIM, EU QUERO TRANSFORMAR MINHA MESA
              <ArrowRight className="w-5 h-5" />
            </CTA>
          </div>
        </div>
      </div>
    </section>
  );
}

const GALERIA = [
  { src: "/images/receita-01-pao-ezequiel.jpg", titulo: "Pão de Ezequiel", desc: "O pão que sustentou um profeta por 430 dias" },
  { src: "/images/receita-02-sopa-lentilhas.jpg", titulo: "Sopa de Lentilhas de Esaú", desc: "O guisado vermelho que mudou a história" },
  { src: "/images/receita-03-pasta-figo.jpg", titulo: "Pasta de Figo", desc: "O remédio doce que curou o Rei Ezequias" },
  { src: "/images/receita-04-pao-cevada.jpg", titulo: "Pão de Cevada", desc: "O pão da multiplicação de Jesus" },
  { src: "/images/receita-05-ensopado.jpg", titulo: "Ensopado dos Profetas", desc: "O prato restaurador de Eliseu" },
  { src: "/images/receita-06-mel-ervas.jpg", titulo: "Bebida de Mel e Ervas", desc: "O manjar do deserto de João Batista" },
];

function Galeria() {
  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm text-secondary mb-4">
            ✦ Algumas das 21 Receitas ✦
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-balance leading-tight">
            Dê uma olhada nas{" "}
            <span className="text-secondary">delícias sagradas</span>
            <br />
            que você vai aprender a fazer
          </h2>
          <div className="gold-divider mt-6" />
          <p className="font-serif italic text-lg text-muted mt-6 max-w-3xl mx-auto">
            Cada prato traz a história bíblica, ingredientes adaptados ao Brasil, modo de preparo passo a passo, explicação científica e reflexão espiritual.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {GALERIA.map((g) => (
            <div
              key={g.titulo}
              className="group relative overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={g.src}
                alt={g.titulo}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
                <h3 className="font-display font-bold text-base md:text-lg leading-tight">
                  {g.titulo}
                </h3>
                <p className="font-serif italic text-xs md:text-sm text-accent/90 mt-1">
                  {g.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-sans text-muted text-sm md:text-base mb-6">
            ...e <strong className="text-foreground">+ 15 receitas</strong> da Galileia ao palácio de Salomão
          </p>
          <CTA variant="primary">
            <Utensils className="w-5 h-5" />
            QUERO COZINHAR COMO OS PROFETAS
          </CTA>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section
      className="py-20 md:py-28 px-6 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1F1208 0%, #3D2817 50%, #5C3A22 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm text-accent mb-4">
          O Segredo Perdido
        </p>
        <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-white text-balance leading-tight">
          E se a resposta para sua{" "}
          <span className="text-accent">saúde e fé</span>
          <br />
          estivesse escondida nas páginas da Bíblia?
        </h2>
        <div className="gold-divider mt-6" />

        <p className="font-serif text-lg md:text-2xl text-white/90 mt-10 leading-relaxed text-balance">
          Hoje vivemos na era da abundância. Mas <strong className="text-accent not-italic">nunca estivemos tão doentes, tão cansados e tão desconectados</strong> do que realmente nutre nossa alma e nosso corpo.
        </p>

        <p className="font-serif text-lg md:text-xl text-white/80 mt-8 leading-relaxed text-balance">
          Trocamos a <strong className="text-white not-italic">sabedoria milenar</strong> pela pressa moderna. Trocamos o pão de Ezequiel pelo pão branco do supermercado. Trocamos o azeite da unção pela margarina industrial. Trocamos o mel das ervas pelo refrigerante diet.
        </p>

        <blockquote className="mt-12 px-6 py-8 border-l-4 border-accent bg-foreground/40 rounded-r-lg max-w-2xl mx-auto text-left">
          <p className="font-serif italic text-lg md:text-xl text-white leading-relaxed">
            "Eis que vos tenho dado toda a erva que dê semente, que está sobre a face de toda a terra; e toda a árvore, em que há fruto que dê semente, ser-vos-á para mantimento."
          </p>
          <cite className="block mt-4 font-sans text-sm uppercase tracking-widest text-accent not-italic">
            — Gênesis 1:29
          </cite>
        </blockquote>

        <p className="font-serif text-lg md:text-2xl text-white mt-10 leading-relaxed text-balance">
          A Mesa dos Profetas <strong className="text-accent not-italic">não é apenas um livro de receitas</strong>. É um convite para retornar à origem.
        </p>
      </div>
    </section>
  );
}

const CONTEUDO = [
  "21 receitas bíblicas completas com história, ciência e reflexão",
  "Pão de Ezequiel: a proteína completa que sustentou um profeta",
  "Sopa de Lentilhas de Esaú: o prato que mudou um destino",
  "Pasta de Figo: o remédio que curou o Rei Ezequias",
  "Pão de Cevada: o alimento da multiplicação de Jesus",
  "Ensopado dos Profetas: a refeição restauradora de Eliseu",
  "Bebida de Mel e Ervas: o elixir do deserto de João Batista",
  "Peixe assado da Galileia: a refeição preparada por Jesus",
  "Tâmaras Recheadas: a sobremesa digna de reis",
  "Hummus dos Peregrinos: a pasta de Rute e Boaz",
  "Cordeiro da Páscoa: a refeição que libertou um povo",
  "Salada das Sete Espécies: os frutos da Terra Prometida",
  "Manjar de Leite e Mel: a celebração da promessa cumprida",
  "+ 9 receitas exclusivas que você precisa conhecer",
  "Modo de preparo passo a passo, simples e prático",
  "Ingredientes adaptados ao mercado brasileiro",
  "Explicação científica de POR QUE cada combinação funciona",
  "Reflexão espiritual profunda para cada receita",
];

function Conteudo() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm text-secondary mb-4">
            Tudo o que você vai receber
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-balance leading-tight">
            Confira aqui{" "}
            <span className="text-secondary">tudo que você terá acesso</span>
            <br />
            com A Mesa dos Profetas:
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="bg-gradient-to-br from-background to-white border-2 border-accent/20 rounded-3xl p-6 md:p-10 shadow-2xl">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CONTEUDO.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </span>
                <span className="font-sans text-foreground/90 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-10">
          <CTA variant="primary">
            QUERO ACESSO IMEDIATO A TUDO ISSO
            <ArrowRight className="w-5 h-5" />
          </CTA>
        </div>
      </div>
    </section>
  );
}

const BONUS = [
  {
    titulo: "BÔNUS #1: Plano Alimentar de 7 Dias",
    subtitulo: "A Jornada do Profeta",
    desc: "Um cardápio completo dia-a-dia para você experimentar a alimentação bíblica por uma semana inteira. Café, almoço e jantar prontos.",
    valor: "R$ 47",
  },
  {
    titulo: "BÔNUS #2: Lista de Compras da Terra Prometida",
    subtitulo: "Pronta para imprimir",
    desc: "Cereais, leguminosas, frutas, ervas, especiarias — tudo organizado por seção do supermercado. Você economiza tempo e dinheiro.",
    valor: "R$ 27",
  },
  {
    titulo: "BÔNUS #3: Guia dos Alimentos da Bíblia",
    subtitulo: "Os 10 Segredos Alimentares",
    desc: "Um e-book completo de 15 páginas com os 10 alimentos mais poderosos da Bíblia e o segredo científico por trás de cada um.",
    valor: "R$ 37",
  },
];

function Bonus() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-foreground via-foreground to-secondary/80 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #D4AF37 0%, transparent 45%), radial-gradient(circle at 80% 70%, #D4AF37 0%, transparent 45%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-foreground text-xs sm:text-sm font-sans font-bold uppercase tracking-widest mb-6">
            <Gift className="w-4 h-4" />
            Bônus Exclusivos · Só de presente HOJE
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white text-balance leading-tight">
            Comprando HOJE você leva{" "}
            <span className="text-accent">3 bônus de presente</span>
          </h2>
          <p className="font-serif italic text-lg md:text-xl text-white/80 mt-6 max-w-2xl mx-auto">
            Mais de <strong className="not-italic text-accent">R$ 111 em bônus</strong> totalmente gratuitos junto com o seu ebook
          </p>
          <div className="gold-divider mt-6" />
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden border-2 border-accent/20 shadow-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, #3D2817 0%, #2A1B0F 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.18) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />
            <img
              src="/images/bundle-completo.png"
              alt="Bundle completo: ebook principal + guia gratuito + plano de 7 dias + lista de compras"
              loading="lazy"
              className="relative w-full h-auto block"
            />
          </div>
          <p className="text-center font-sans text-sm text-white/60 mt-4 italic">
            Tudo o que você recebe ao adquirir hoje
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BONUS.map((b, i) => (
            <div
              key={b.titulo}
              className="bg-white/10 backdrop-blur border-2 border-accent/40 rounded-2xl p-6 hover:scale-105 transition-transform"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-bold text-3xl text-accent">
                  0{i + 1}
                </span>
                <span className="bg-accent text-foreground text-xs font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  GRÁTIS
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-white leading-tight">
                {b.titulo}
              </h3>
              <p className="font-serif italic text-accent mt-1 text-sm">
                {b.subtitulo}
              </p>
              <p className="font-sans text-white/80 mt-4 text-sm leading-relaxed">
                {b.desc}
              </p>
              <p className="mt-5 font-sans text-sm">
                <span className="line-through text-white/50">{b.valor}</span>{" "}
                <strong className="text-accent">Hoje: GRÁTIS</strong>
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <CTA variant="huge">
            <Gift className="w-5 h-5" />
            QUERO O EBOOK + 3 BÔNUS GRÁTIS
          </CTA>
          <p className="mt-4 font-sans text-sm text-white/70">
            Valor total dos bônus:{" "}
            <strong className="text-accent">R$ 111</strong> · Seu investimento:
            apenas <strong className="text-accent">R$ {PRICE_TO}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

const DIFERENCIAIS = [
  {
    icon: BookOpen,
    title: "Sabedoria Milenar",
    desc: "Cada receita vem com sua história bíblica completa: versículo, contexto e reflexão espiritual profunda.",
  },
  {
    icon: Microscope,
    title: "Base Científica Sólida",
    desc: "Explicação nutricional moderna do POR QUE cada combinação ancestral funciona. Fé e ciência em harmonia.",
  },
  {
    icon: Utensils,
    title: "Aplicação 100% Prática",
    desc: "Ingredientes encontrados em qualquer mercado brasileiro. Preparo passo a passo, simples e acessível.",
  },
];

function Diferenciais() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm text-secondary mb-4">
            Por que este ebook é diferente
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-balance leading-tight">
            Mais que receitas.{" "}
            <span className="text-secondary">Uma experiência sagrada.</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

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

function SobreAutor() {
  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm text-secondary mb-4">
            Quem está por trás
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-balance leading-tight">
            Quem é{" "}
            <span className="text-secondary">Enzo Almeida Verde</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-1">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-foreground via-secondary to-accent flex items-center justify-center shadow-2xl">
              <div className="text-center text-white p-8">
                <p className="font-display font-extrabold text-7xl">EAV</p>
                <p className="font-serif italic text-lg mt-4 text-white/90">
                  Autor, Pesquisador e Curador
                </p>
                <div className="gold-divider mt-4 !w-24" />
                <p className="font-sans text-sm mt-4 text-white/80 uppercase tracking-widest">
                  ✦ Nutrição Bíblica ✦
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed">
              <strong className="font-sans not-italic">Pesquisador apaixonado pela conexão entre fé, história e nutrição</strong>, Enzo passou anos mergulhado nas Escrituras e na literatura nutricional buscando entender por que os personagens bíblicos viviam vidas tão longas e produtivas.
            </p>

            <p className="font-serif text-base md:text-lg text-muted leading-relaxed">
              Ele descobriu que <strong className="text-foreground not-italic">cada alimento mencionado na Bíblia foi escolhido com propósito divino</strong> — não por acaso. Cada combinação ancestral é uma obra-prima nutricional que a ciência moderna está apenas começando a entender.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 py-2 my-6">
              <p className="font-serif italic text-lg md:text-xl text-foreground leading-relaxed">
                "Este livro é resultado de uma jornada profunda pela história bíblica, nutrição ancestral e espiritualidade. Cada receita foi cuidadosamente pesquisada e adaptada para trazer os segredos alimentares dos profetas até a sua mesa moderna."
              </p>
              <cite className="block mt-3 font-sans text-sm uppercase tracking-widest text-secondary not-italic">
                — Enzo Almeida Verde
              </cite>
            </blockquote>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "+ 1.000 Leitores",
                "21 Receitas Testadas",
                "48 Páginas de Conteúdo",
                "Edição Premium",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 bg-white border border-accent/30 text-foreground font-sans text-sm font-medium px-4 py-1.5 rounded-full"
                >
                  <Check className="w-4 h-4 text-accent" />
                  {t}
                </span>
              ))}
            </div>
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
    texto: "Substituí o pão branco pelo Pão de Ezequiel e em duas semanas senti a diferença. Mais energia, menos fome no meio da manhã. Mas o que mais me tocou foi a reflexão espiritual antes de cada receita. Vale cada centavo!",
  },
  {
    nome: "Pr. João Almeida",
    cidade: "Belo Horizonte, MG",
    texto: "Uso este material nos cultos de família. Cozinhar a Sopa de Lentilhas de Esaú enquanto leio Gênesis virou um momento sagrado em casa. Recomendo a todos os pastores e líderes!",
  },
  {
    nome: "Ana Carvalho",
    cidade: "Curitiba, PR",
    texto: "Não esperava que receitas trouxessem tanta paz. A bebida de mel e ervas do João Batista tornou-se meu ritual da noite. Meu marido perdeu 4kg em 1 mês só seguindo o plano de 7 dias!",
  },
  {
    nome: "Roberto Mendes",
    cidade: "Salvador, BA",
    texto: "Sou diabético e meu médico me proibiu de quase tudo. Quando descobri o pão de cevada deste ebook, minha vida mudou. Glicemia controlada e sabor de verdade na mesa.",
  },
  {
    nome: "Cláudia Ferraz",
    cidade: "Recife, PE",
    texto: "Comprei pensando que era só mais um ebook. Estava enganada! Cada página é uma aula de fé e nutrição. Já presenteei 3 amigas. Conteúdo simplesmente IMPECÁVEL.",
  },
  {
    nome: "Pra. Helena Vieira",
    cidade: "Brasília, DF",
    texto: "As reflexões espirituais são profundas e a comida é deliciosa. Usei na escola dominical e mudou a forma como nossa igreja enxerga as Escrituras. Bíblia e mesa juntas, finalmente!",
  },
];

function Testemunhos() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm text-secondary mb-4">
            ✦ Veja o que dizem os leitores ✦
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-balance leading-tight">
            Mais de{" "}
            <span className="text-secondary">+1.000 vidas transformadas</span>
            <br />
            à mesa sagrada
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTEMUNHOS.map((t) => (
            <article
              key={t.nome}
              className="bg-background/70 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div
                className="flex gap-1 mb-4"
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
              <p className="font-serif italic text-foreground/85 leading-relaxed flex-1 text-sm md:text-base">
                "{t.texto}"
              </p>
              <footer className="mt-5 pt-5 border-t border-foreground/10">
                <p className="font-display font-bold text-base text-foreground">
                  {t.nome}
                </p>
                <p className="font-sans text-xs text-muted mt-0.5">
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

const ANTES = [
  "Pão branco refinado que dá pico de açúcar",
  "Dietas restritivas que nunca duram",
  "Refeições sem propósito espiritual",
  "Suplementos caros e sem resultado",
  "Cansaço constante e mente nublada",
  "Mesa sem comunhão familiar",
];

const DEPOIS = [
  "Pão de Ezequiel: proteína completa e nutritiva",
  "Plano bíblico simples que cabe na sua rotina",
  "Cada refeição vira oração e gratidão",
  "Alimentos reais, naturais e acessíveis",
  "Energia constante e clareza mental",
  "Mesa como altar de fé e união",
];

function AntesDepois() {
  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm text-secondary mb-4">
            A transformação
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-balance leading-tight">
            Sua mesa{" "}
            <span className="text-secondary">antes e depois</span>{" "}
            do ebook
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                <X className="w-7 h-7 text-white" strokeWidth={3} />
              </div>
              <h3 className="font-display font-bold text-2xl text-red-900">
                Sem o Ebook
              </h3>
            </div>
            <ul className="space-y-3">
              {ANTES.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-red-900/80">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-accent/15 to-accent/5 border-2 border-accent rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Check
                    className="w-7 h-7 text-white"
                    strokeWidth={3}
                  />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground">
                  Com A Mesa dos Profetas
                </h3>
              </div>
              <ul className="space-y-3">
                {DEPOIS.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-foreground/90 font-medium">
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrecoOferta() {
  return (
    <section
      className="py-20 md:py-28 px-6 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #3D2817 0%, #5C3A22 50%, #C67C4E 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600 text-white text-xs sm:text-sm font-sans font-bold uppercase tracking-widest mb-6 animate-pulse">
          <Flame className="w-4 h-4" />
          OFERTA ESPECIAL · TEMPO LIMITADO
        </span>

        <h2 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-white leading-tight text-balance">
          Você teria pago{" "}
          <span className="text-accent">R$ 238</span>
          <br />
          pelo bundle completo
        </h2>

        <p className="font-serif italic text-lg md:text-xl text-white/85 mt-6 max-w-2xl mx-auto">
          (Ebook R$ {PRICE_FROM} + Plano de 7 Dias R$ 47 + Lista de Compras R$ 27 + Guia dos Alimentos R$ 37)
        </p>

        <div className="my-12 bg-white text-foreground rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-accent">
          <p className="font-sans uppercase tracking-widest text-xs text-secondary">
            Hoje, por apenas
          </p>
          <p className="font-sans line-through text-2xl md:text-3xl text-muted mt-3">
            De R$ {PRICE_FROM},00
          </p>
          <p className="font-display font-extrabold text-6xl md:text-8xl text-foreground mt-2 leading-none">
            R${PRICE_TO}
            <span className="text-2xl md:text-4xl text-secondary">,00</span>
          </p>
          <p className="font-sans text-base md:text-lg text-foreground mt-4">
            ou <strong>{INSTALLMENTS_COUNT}x de R$ {PRICE_INSTALLMENTS}</strong> no cartão
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/15 text-foreground rounded-full">
              <Check className="w-4 h-4 text-accent" /> Acesso vitalício
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/15 text-foreground rounded-full">
              <Check className="w-4 h-4 text-accent" /> 3 bônus grátis
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/15 text-foreground rounded-full">
              <Check className="w-4 h-4 text-accent" /> Garantia 7 dias
            </span>
          </div>

          <div className="mt-8">
            <CTA variant="huge" className="w-full">
              <Gift className="w-5 h-5" />
              GARANTIR MEU EBOOK + BÔNUS
            </CTA>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 text-xs font-sans text-muted">
            <span className="inline-flex items-center gap-1.5">
              <CreditCard className="w-4 h-4" /> Cartão · Pix · Boleto
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> 100% Seguro
            </span>
          </div>
        </div>

        <p className="font-sans text-white/80 text-sm md:text-base max-w-xl mx-auto">
          Menos que o valor de um <strong className="text-accent">delivery de pizza</strong> para você transformar sua mesa em um altar de saúde e espiritualidade.
        </p>
      </div>
    </section>
  );
}

function Garantia() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-background to-white border-4 border-accent rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="w-28 h-28 mx-auto bg-gradient-to-br from-accent to-accent-300 rounded-full flex items-center justify-center shadow-2xl mb-6">
              <ShieldCheck
                className="w-16 h-16 text-white"
                strokeWidth={1.5}
              />
            </div>

            <p className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm text-secondary mb-3">
              Garantia Incondicional
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-foreground text-balance leading-tight">
              7 dias para experimentar{" "}
              <span className="text-secondary">sem risco algum</span>
            </h2>
            <div className="gold-divider mt-6" />

            <p className="font-serif italic text-lg md:text-xl text-foreground/85 mt-8 max-w-2xl mx-auto leading-relaxed text-balance">
              Se nos primeiros 7 dias você não sentir uma transformação real na sua mesa e na sua espiritualidade, basta enviar um e-mail e{" "}
              <strong className="not-italic text-secondary">devolvemos 100% do seu dinheiro</strong>. Sem perguntas. Sem burocracia. Sem complicações.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
              {[
                { icon: Check, txt: "Sem perguntas" },
                { icon: Check, txt: "100% do valor" },
                { icon: Check, txt: "Resposta em 24h" },
              ].map(({ icon: Icon, txt }) => (
                <div
                  key={txt}
                  className="flex items-center justify-center gap-2 text-sm text-foreground/80"
                >
                  <Icon className="w-4 h-4 text-accent" />
                  <span>{txt}</span>
                </div>
              ))}
            </div>
          </div>
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
    a: `Cartão de crédito (em até ${INSTALLMENTS_COUNT}x de R$ ${PRICE_INSTALLMENTS}), Pix, boleto bancário e PayPal. Todo o checkout é processado pela Hotmart, com criptografia de ponta a ponta e segurança bancária.`,
  },
  {
    q: "Existe garantia? E se eu não gostar?",
    a: "Sim. Você tem 7 dias de garantia incondicional. Se não gostar do conteúdo por qualquer motivo, basta enviar um e-mail solicitando o reembolso e ele será processado integralmente — sem perguntas, sem burocracia.",
  },
  {
    q: "Os ingredientes são fáceis de encontrar no Brasil?",
    a: "Sim. Todas as receitas usam ingredientes encontrados em supermercados, feiras livres e lojas de produtos naturais brasileiras. A lista de compras vem pronta para você levar ao mercado.",
  },
  {
    q: "Preciso ter conhecimento culinário avançado?",
    a: "Não. Cada receita foi pensada para ser preparada por qualquer pessoa, mesmo sem experiência. O passo a passo é claro, simples e direto.",
  },
  {
    q: "O acesso é vitalício mesmo?",
    a: "Sim. Você baixa o PDF e fica com ele para sempre. Pode imprimir, compartilhar com sua família, levar para a igreja. É seu para a vida toda.",
  },
];

function FAQ() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-background to-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm text-secondary mb-4">
            Perguntas Frequentes
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-balance leading-tight">
            Antes de você se{" "}
            <span className="text-secondary">sentar à mesa</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

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

        <div className="text-center mt-10">
          <p className="font-sans text-sm text-muted">
            Ainda com dúvidas?{" "}
            <a
              href="mailto:contato@mesadosprofetas.com"
              className="text-accent hover:underline font-medium"
            >
              Fale com o suporte
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section
      className="relative py-20 md:py-28 px-6 text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1F1208 0%, #3D2817 50%, #C67C4E 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 80% 80%, #D4AF37 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600 text-white text-xs sm:text-sm font-sans font-bold uppercase tracking-widest mb-6 animate-pulse">
          <Flame className="w-4 h-4" />
          ÚLTIMA CHANCE · OFERTA EXPIRA EM BREVE
        </span>

        <h2 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-balance leading-tight">
          A mesa está posta.
          <br />
          <span className="text-accent">O banquete está servido.</span>
        </h2>

        <div className="mt-6">
          <CountdownTimer />
        </div>

        <p className="font-serif italic text-lg md:text-2xl text-white/90 mt-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Resgate HOJE os segredos alimentares que sustentaram reis, fortaleceram profetas e nutriram o próprio Filho de Deus.
        </p>

        <div className="mt-10 inline-flex flex-col items-center gap-2 px-6 py-4 bg-foreground/40 backdrop-blur border border-accent/40 rounded-2xl">
          <span className="font-sans text-sm uppercase tracking-widest text-white/70">
            Você paga apenas
          </span>
          <span className="font-display font-extrabold text-5xl md:text-6xl text-accent">
            R$ {PRICE_TO}
          </span>
          <span className="font-sans text-sm text-white/80">
            ou {INSTALLMENTS_COUNT}x de R$ {PRICE_INSTALLMENTS}
          </span>
        </div>

        <div className="flex flex-col items-center gap-3 mt-10">
          <CTA variant="huge">
            <Gift className="w-5 h-5" />
            GARANTIR MEU EBOOK + 3 BÔNUS
          </CTA>
          <a
            href="mailto:contato@mesadosprofetas.com"
            className="font-sans text-sm text-white/70 hover:text-accent transition-colors inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Tenho dúvidas, quero falar com o suporte
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
          <div className="flex items-center justify-center gap-2 text-white/80">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span>Pagamento Seguro</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Clock className="w-5 h-5 text-accent" />
            <span>Acesso Imediato</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Award className="w-5 h-5 text-accent" />
            <span>Garantia 7 Dias</span>
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
              <a href="#para-quem" className="hover:text-accent transition-colors">
                Para quem é
              </a>
            </li>
            <li>
              <a href="/leads" className="hover:text-accent transition-colors">
                Guia Gratuito (PDF)
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
      <UrgencyBar />
      <Hero />
      <ParaQuemE />
      <Galeria />
      <Story />
      <Conteudo />
      <Bonus />
      <Diferenciais />
      <SobreAutor />
      <Testemunhos />
      <AntesDepois />
      <PrecoOferta />
      <Garantia />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
