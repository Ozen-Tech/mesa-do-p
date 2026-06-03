import { useEffect, useState } from "react";
import {
  BookOpen,
  Utensils,
  Star,
  ChevronDown,
  ChevronUp,
  Plus,
  Check,
  X,
  Mail,
  ShieldCheck,
  Clock,
  Gift,
  CreditCard,
  Award,
  ArrowRight,
  Heart,
  MessageCircle,
  MousePointerClick,
  FileText,
  Menu,
  Youtube,
  Lock,
} from "lucide-react";

const HOTMART_URL =
  "https://pay.hotmart.com/G105661402K?checkoutMode=10";
const SUPPORT_EMAIL = "contato@mesadosprofetas.com";
const WHATSAPP_NUMBER = "5598999068855";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Tenho uma dúvida sobre o ebook A Mesa dos Profetas."
)}`;

const PRICE_FROM = "127";
const PRICE_TO = "67";
const PRICE_INSTALLMENTS = "6,46";
const INSTALLMENTS_COUNT = "12";

const YOUTUBE = {
  channelName: "Nutrição Bíblica",
  channelUrl:
    "https://youtube.com/@nutricaobiblicaa?si=IUoNgBuA2efCIRp1",
  subscribers: "6.500",
  totalViews: "150 mil",
  videoCount: "",
  tagline:
    "Conteúdo semanal sobre alimentação natural, receitas bíblicas e saúde com base nas Escrituras.",
};

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#problema", label: "Para quem é" },
  { href: "#receitas", label: "Receitas" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#oferta", label: "Oferta" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: HOTMART_URL, label: "Comprar", external: true },
] as const;

const CATEGORIAS_RECEITAS = [
  {
    titulo: "Pão de Ezequiel",
    qtd: 2,
    desc: "Proteína completa de grãos e leguminosas — o pão que sustentou o profeta.",
    img: "/images/receita-01-pao-ezequiel.jpg",
  },
  {
    titulo: "Sopa de Lentilhas",
    qtd: 3,
    desc: "Pratos reconfortantes de Esaú, da viúva de Sarepta e dos patriarcas.",
    img: "/images/receita-02-sopa-lentilhas.jpg",
  },
  {
    titulo: "Pasta de Figo",
    qtd: 1,
    desc: "O remédio doce que curou o Rei Ezequias — simples e acessível.",
    img: "/images/receita-03-pasta-figo.jpg",
  },
  {
    titulo: "Receitas dos Patriarcas",
    qtd: 4,
    desc: "Abraão, Davi, Jacó e Boaz — mesa de hospitalidade e provisão.",
    img: "/images/receita-categoria-patriarcas.jpg",
  },
  {
    titulo: "Receitas Festivas",
    qtd: 3,
    desc: "Páscoa, casamento em Caná e banquetes de celebração.",
    img: "/images/receita-categoria-festivas.jpg",
  },
  {
    titulo: "Receitas do Deserto",
    qtd: 5,
    desc: "Elias, João Batista, maná e provisão no tempo da provação.",
    img: "/images/receita-categoria-deserto.jpg",
  },
  {
    titulo: "Receitas dos Reis",
    qtd: 3,
    desc: "Ezequias, Salomão e banquetes dignos de palácio.",
    img: "/images/receita-categoria-reis.jpg",
  },
] as const;

const OFERTA_ITENS = [
  "Livro digital completo (PDF)",
  "21 receitas bíblicas passo a passo",
  "História e contexto de cada receita",
  "Referências bíblicas em cada capítulo",
  "Modo de preparo adaptado ao Brasil",
  "Acesso imediato após a compra",
  "Acesso vitalício — baixe quantas vezes quiser",
] as const;

const BONUS_FUTUROS = [
  {
    titulo: "Plano Daniel 21 Dias",
    desc: "Jornada alimentar inspirada em Daniel 1 — em breve.",
  },
  {
    titulo: "Lista de Compras Bíblica",
    desc: "Versão ampliada da despensa sagrada — em breve.",
  },
  {
    titulo: "Guia da Despensa Sagrada",
    desc: "Organize sua cozinha com os alimentos das Escrituras — em breve.",
  },
] as const;

const ctaClasses =
  "hotmart-fb hotmart__button-checkout inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-4 sm:py-5 min-h-[48px] rounded-full font-sans font-bold tracking-normal transition-all duration-300 ease-out cursor-pointer text-base sm:text-lg hover:-translate-y-0.5";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function CompraSeguraBadge({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-2 text-center max-w-md mx-auto ${className}`}
    >
      <p
        className={`font-sans text-sm sm:text-base leading-relaxed ${
          light ? "text-white/90" : "text-foreground/85"
        }`}
      >
        <ShieldCheck className="w-4 h-4 inline-block text-accent mr-1 -mt-0.5" />
        Pagamento na <strong>Hotmart</strong> — plataforma usada por milhares de
        cursos no Brasil
      </p>
      <div
        className={`flex flex-wrap items-center justify-center gap-3 text-sm font-sans ${
          light ? "text-white/80" : "text-foreground/75"
        }`}
      >
        <span className="inline-flex items-center gap-1">
          <CreditCard className="w-4 h-4 text-accent" /> Cartão
        </span>
        <span>Pix</span>
        <span>Boleto</span>
      </div>
    </div>
  );
}

function GarantiaAbaixoCTA({ light = false }: { light?: boolean }) {
  return (
    <p
      className={`font-sans text-sm sm:text-base flex items-center justify-center gap-2 flex-wrap text-center ${
        light ? "text-white/90" : "text-foreground/80"
      }`}
    >
      <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0" />
      <span>
        <strong>7 dias</strong> para experimentar — devolução total, sem
        perguntas
      </span>
    </p>
  );
}

type CtaProps = {
  variant?: "primary" | "secondary" | "huge";
  children: React.ReactNode;
  className?: string;
  showTrust?: boolean;
};

function CTA({
  variant = "primary",
  children,
  className = "",
  showTrust = false,
}: CtaProps) {
  const reducedMotion = useReducedMotion();
  const variants: Record<NonNullable<CtaProps["variant"]>, string> = {
    primary:
      "bg-accent text-foreground hover:bg-accent-300 shadow-gold hover:shadow-2xl",
    secondary:
      "bg-foreground text-accent hover:bg-secondary hover:text-white shadow-xl",
    huge: `bg-gradient-to-r from-accent via-accent-300 to-accent text-foreground shadow-2xl text-lg sm:text-xl px-8 sm:px-14 py-5 sm:py-6 ${
      reducedMotion ? "" : "hover:scale-[1.02]"
    }`,
  };

  return (
    <div className={`flex flex-col items-center gap-3 w-full ${className}`}>
      <a
        href={HOTMART_URL}
        onClick={(e) => {
          if (typeof window !== "undefined" && (window as Window & { hotmart?: unknown }).hotmart) {
            e.preventDefault();
          }
        }}
        className={`${ctaClasses} ${variants[variant]} w-full sm:w-auto`}
      >
        {children}
      </a>
      {showTrust && (
        <>
          <GarantiaAbaixoCTA light={variant === "huge"} />
          <CompraSeguraBadge light={variant === "huge"} />
        </>
      )}
    </div>
  );
}

function getTimeUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diff = Math.max(0, midnight.getTime() - now.getTime());
  return {
    h: Math.floor(diff / 3_600_000),
    m: Math.floor((diff % 3_600_000) / 60_000),
    s: Math.floor((diff % 60_000) / 1000),
  };
}

function getBonusSlotsLeft() {
  const seed = new Date().getDate() + new Date().getMonth() * 31;
  return 7 + (seed % 11);
}

function CountdownTimer({
  compact = false,
  light = false,
}: {
  compact?: boolean;
  light?: boolean;
}) {
  const [time, setTime] = useState(getTimeUntilMidnight);

  useEffect(() => {
    const tick = () => setTime(getTimeUntilMidnight());
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  const box = light
    ? `bg-foreground text-accent rounded-md text-center font-mono font-bold tabular-nums ${
        compact
          ? "text-base px-2 py-1 min-w-[2.25rem]"
          : "text-lg sm:text-2xl px-2.5 sm:px-3.5 py-1 sm:py-1.5 min-w-[2.75rem]"
      }`
    : `bg-foreground/90 text-accent rounded-md text-center font-mono font-bold tabular-nums ${
        compact
          ? "text-base px-2 py-1 min-w-[2.25rem]"
          : "text-lg sm:text-2xl px-2.5 sm:px-3.5 py-1 sm:py-1.5 min-w-[2.75rem] sm:min-w-[3.25rem]"
      }`;
  const sep = light
    ? "text-foreground/70 text-sm"
    : compact
      ? "text-white/70 text-sm"
      : "text-foreground";

  return (
    <div
      className={`flex items-center gap-1 sm:gap-1.5 ${compact ? "" : "justify-center"}`}
      role="timer"
      aria-live="polite"
    >
      <span className={box}>{pad(time.h)}</span>
      <span className={sep}>:</span>
      <span className={box}>{pad(time.m)}</span>
      <span className={sep}>:</span>
      <span className={box}>{pad(time.s)}</span>
    </div>
  );
}

function UrgencyCountdownBlock({
  variant = "hero",
}: {
  variant?: "hero" | "card" | "final";
}) {
  const slots = getBonusSlotsLeft();
  const labels =
    variant === "final"
      ? {
          title: "Condição especial válida até a meia-noite de hoje",
          sub: `Ainda há ${slots} acessos com os 3 presentes neste lote`,
        }
      : variant === "card"
        ? {
            title: "Valor promocional válido só hoje",
            sub: `Amanhã o ebook volta a R$ ${PRICE_FROM} sem os bônus`,
          }
        : {
            title: "Presentes de R$ 111 inclusos até a meia-noite",
            sub: `Restam ${slots} acessos com desconto neste lote de hoje`,
          };

  return (
    <div
      className={
        variant === "card"
          ? "mt-6 p-4 rounded-2xl bg-accent/10 border-2 border-accent/40"
          : variant === "final"
            ? "mt-6 inline-flex flex-col items-center gap-3"
            : "flex flex-col items-center gap-3"
      }
    >
      <div className="flex items-center gap-2 flex-wrap justify-center">
        <Clock
          className={`w-5 h-5 flex-shrink-0 ${
            variant === "card" ? "text-secondary" : "text-accent"
          }`}
        />
        <span
          className={`font-sans font-semibold text-center ${
            variant === "card"
              ? "text-sm sm:text-base text-foreground"
              : variant === "hero"
                ? "text-sm sm:text-base text-white"
                : "text-sm sm:text-base text-white/95"
          }`}
        >
          {labels.title}
        </span>
      </div>
      <CountdownTimer
        compact={variant !== "final"}
        light={variant === "card"}
      />
      <p
        className={`font-sans text-center max-w-md ${
          variant === "card"
            ? "text-sm sm:text-base text-foreground/80"
            : variant === "hero"
              ? "text-sm text-white/80"
              : "text-sm sm:text-base text-white/85"
        }`}
      >
        {labels.sub}
      </p>
    </div>
  );
}

function UrgencyBar() {
  const slots = getBonusSlotsLeft();
  return (
    <div
      id="topo-barra"
      className="sticky top-0 z-[60] bg-gradient-to-r from-foreground via-secondary to-foreground text-white py-3 px-4 text-center border-b border-accent/30"
    >
      <p className="font-sans font-semibold text-sm sm:text-base flex items-center justify-center gap-2 flex-wrap leading-snug">
        <Gift className="w-4 h-4 flex-shrink-0 text-accent" />
        <span>
          Hoje: de R${PRICE_FROM} por{" "}
          <strong className="text-accent">R${PRICE_TO}</strong> com 3 presentes —{" "}
          {slots} acessos neste lote
        </span>
      </p>
    </div>
  );
}

function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Navegação principal"
      className="sticky top-[52px] z-50 bg-background/95 backdrop-blur border-b border-foreground/10 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-4 py-2">
        <a
          href="#inicio"
          className="font-display font-bold text-foreground text-sm sm:text-base hidden sm:block"
        >
          A Mesa dos Profetas
        </a>
        <ul className="hidden md:flex flex-wrap items-center justify-center gap-1 flex-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...("external" in link && link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="font-sans text-sm font-medium text-foreground/90 hover:text-secondary px-3 py-2 rounded-lg hover:bg-accent/10 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-foreground min-h-[48px] min-w-[48px] flex items-center justify-center"
          aria-expanded={open}
          aria-controls="nav-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="w-6 h-6" />
          <span className="sr-only">Abrir menu</span>
        </button>
        <a
          href={HOTMART_URL}
          className="hidden sm:inline-flex items-center justify-center min-h-[48px] px-5 py-2 rounded-full bg-accent text-foreground font-sans font-bold text-sm hover:bg-accent-300 transition-colors"
        >
          Comprar
        </a>
      </div>
      {open && (
        <ul
          id="nav-mobile"
          className="md:hidden border-t border-foreground/10 px-4 py-3 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                {...("external" in link && link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="block font-sans text-base py-3 px-2 text-foreground hover:bg-accent/10 rounded-lg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

const COMO_FUNCIONA = [
  {
    icon: MousePointerClick,
    titulo: "1. Clique no botão dourado",
    desc: "Você será levado à página de pagamento segura da Hotmart (abre em nova aba).",
  },
  {
    icon: CreditCard,
    titulo: "2. Escolha como pagar",
    desc: "Cartão de crédito (até 12x), Pix ou boleto — como preferir.",
  },
  {
    icon: FileText,
    titulo: "3. Receba o PDF no e-mail",
    desc: "Em poucos minutos o link chega na sua caixa de entrada (confira também o spam). Pode ler no celular ou imprimir.",
  },
];

function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="py-16 md:py-24 px-6 bg-white border-y border-foreground/5"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-sm font-semibold text-secondary mb-3 tracking-wide">
            Simples e seguro
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-balance leading-tight">
            Como receber o ebook em{" "}
            <span className="text-secondary">3 passos</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMO_FUNCIONA.map(({ icon: Icon, titulo, desc }) => (
            <div
              key={titulo}
              className="text-center bg-background/60 rounded-2xl p-8 border border-accent/20"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
                <Icon className="w-8 h-8 text-secondary" strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {titulo}
              </h3>
              <p className="font-sans text-base text-foreground/85 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <CTA variant="primary" showTrust>
            Quero o guia completo — pagamento seguro
            <ArrowRight className="w-5 h-5" />
          </CTA>
        </div>
      </div>
    </section>
  );
}

function FloatingActions() {
  const [showBuy, setShowBuy] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShowBuy(y > window.innerHeight * 0.3);
      setShowTop(y > 600 && max - y > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 sm:right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white font-sans font-bold text-base px-4 py-3 min-h-[48px] rounded-full shadow-2xl hover:brightness-110 transition-all"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline">Dúvidas?</span>
      </a>
      {showBuy && (
        <a
          href={HOTMART_URL}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50 flex items-center justify-center gap-2 min-h-[52px] px-6 py-3 rounded-full bg-accent text-foreground font-sans font-bold text-base sm:text-lg shadow-2xl hover:bg-accent-300 transition-colors text-center"
        >
          Comprar agora — R$ {PRICE_TO}
        </a>
      )}
      {showTop && (
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: reducedMotion ? "auto" : "smooth",
            })
          }
          className="fixed bottom-24 left-4 sm:left-6 z-50 w-12 h-12 min-h-[48px] min-w-[48px] rounded-full bg-foreground text-accent shadow-xl flex items-center justify-center hover:bg-secondary transition-colors"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}

function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  const parallaxY = reducedMotion ? 0 : scrollY * 0.35;

  return (
    <section
      id="inicio"
      className="relative min-h-[100vh] w-full overflow-hidden text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: 'url("/images/hero-mesa.jpg")',
          transform: `translateY(${parallaxY}px) scale(1.1)`,
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
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/50 text-accent text-sm sm:text-base font-sans font-semibold mb-6">
          <BookOpen className="w-4 h-4" />
          21 receitas · ingredientes do supermercado · acesso vitalício
        </span>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl leading-[1.2] text-balance">
          Descubra como alimentar sua família com princípios bíblicos usando
          ingredientes simples do supermercado comum
        </h1>

        <p className="font-serif italic text-lg md:text-2xl mt-8 max-w-3xl text-white/95 text-balance leading-relaxed">
          21 receitas inspiradas nas Escrituras, adaptadas para a cozinha
          brasileira, com história bíblica, contexto espiritual e preparo passo
          a passo.
        </p>

        <p className="font-sans text-base md:text-lg mt-4 text-white/85 max-w-2xl">
          Para quem busca <strong className="text-white">menos inflamação</strong>,{" "}
          <strong className="text-white">mais energia</strong> e uma mesa que
          une fé e alimentação natural — sem dietas complicadas.
        </p>

        <div className="mt-8 w-full max-w-lg">
          <CTA variant="huge" showTrust>
            Quero Acessar A Mesa dos Profetas
            <ArrowRight className="w-5 h-5" />
          </CTA>
          <p className="font-sans text-base text-white/85 mt-4 text-center">
            <span className="line-through text-white/50">R$ {PRICE_FROM}</span>{" "}
            <strong className="text-accent text-xl">R$ {PRICE_TO}</strong> hoje
            · ou {INSTALLMENTS_COUNT}x de R$ {PRICE_INSTALLMENTS}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
          {[
            { icon: ShieldCheck, label: "Checkout Seguro" },
            { icon: Clock, label: "PDF na Hora" },
            { icon: Award, label: "7 Dias de Garantia" },
            { icon: Heart, label: "+1.000 Famílias" },
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
          href="#problema"
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
    title: "Você se sente cansada(o) e sem energia?",
    desc: "Ultraprocessados, açúcar escondido e refeições sem propósito pesam no corpo — e muitas vezes também na alma.",
  },
  {
    title: "Sua mesa ficou cheia de industrializados?",
    desc: "Margarina, pão branco, temperos prontos… Você sabe que não é o ideal, mas falta inspiração prática para voltar ao natural.",
  },
  {
    title: "Quer cuidar da saúde sem dietas complicadas?",
    desc: "Sem contar calorias obsessivamente. Com ingredientes simples, encontrados em qualquer supermercado brasileiro.",
  },
  {
    title: "Sente que se afastou dos alimentos que Deus criou?",
    desc: "A Bíblia descreve grãos, azeite, mel, legumes e frutas como provisão — não como punição. É hora de reconectar fé e mesa.",
  },
];

function ProblemaSection() {
  return (
    <section id="problema" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-sm font-semibold text-secondary mb-4 tracking-wide">
            Você não está sozinha(o)
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground text-balance leading-tight">
            Muitas famílias cristãs vivem o mesmo{" "}
            <span className="text-secondary">ciclo de cansaço e confusão</span>{" "}
            na alimentação
          </h2>
          <div className="gold-divider mt-6" />
          <p className="font-sans text-lg text-foreground/85 mt-6 max-w-3xl mx-auto leading-relaxed">
            Não é falta de fé. É falta de um caminho claro — prático, acessível e
            alinhado com os princípios alimentares que aparecem nas Escrituras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DORES.map((d) => (
            <div
              key={d.title}
              className="bg-background/70 border-l-4 border-secondary rounded-r-2xl p-6 md:p-8"
            >
              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground leading-snug">
                {d.title}
              </h3>
              <p className="font-sans text-foreground/85 mt-3 leading-relaxed text-base md:text-lg">
                {d.desc}
              </p>
            </div>
          ))}
        </div>

        <blockquote className="mt-12 px-6 py-8 border-l-4 border-accent bg-background/80 rounded-r-2xl max-w-3xl mx-auto">
          <p className="font-serif italic text-lg md:text-xl text-foreground leading-relaxed">
            &ldquo;Eis que vos tenho dado toda a erva que dê semente… ser-vos-á
            para mantimento.&rdquo;
          </p>
          <cite className="block mt-4 font-sans text-sm uppercase tracking-widest text-secondary not-italic">
            — Gênesis 1:29
          </cite>
        </blockquote>

        <div className="text-center mt-12">
          <CTA variant="primary" showTrust>
            Quero Acessar A Mesa dos Profetas
            <ArrowRight className="w-5 h-5" />
          </CTA>
        </div>
      </div>
    </section>
  );
}

const TOTAL_RECEITAS = CATEGORIAS_RECEITAS.reduce((s, c) => s + c.qtd, 0);

function OQueVoceRecebe() {
  return (
    <section id="receitas" className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-sm font-semibold text-secondary mb-4 tracking-wide">
            O que você recebe
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground text-balance leading-tight">
            <span className="text-secondary">{TOTAL_RECEITAS} receitas</span>{" "}
            organizadas por tema bíblico
          </h2>
          <div className="gold-divider mt-6" />
          <p className="font-sans text-lg text-foreground/85 mt-6 max-w-3xl mx-auto">
            Cada categoria traz história bíblica, referência das Escrituras,
            modo de preparo adaptado ao Brasil e reflexão espiritual.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CATEGORIAS_RECEITAS.map((cat) => (
            <article
              key={cat.titulo}
              className="bg-white rounded-2xl overflow-hidden border-2 border-transparent hover:border-accent shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.titulo}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="inline-flex self-start px-3 py-1 rounded-full bg-accent/15 text-secondary font-sans text-sm font-bold mb-3">
                  {cat.qtd} {cat.qtd === 1 ? "receita" : "receitas"}
                </span>
                <h3 className="font-display font-bold text-xl text-foreground leading-snug">
                  {cat.titulo}
                </h3>
                <p className="font-sans text-foreground/80 mt-2 text-base leading-relaxed flex-1">
                  {cat.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center font-display font-bold text-2xl md:text-3xl text-foreground mt-12">
          Total:{" "}
          <span className="text-accent">{TOTAL_RECEITAS} receitas completas</span>
        </p>

        <div className="text-center mt-10">
          <CTA variant="primary" showTrust>
            Quero Acessar A Mesa dos Profetas
            <ArrowRight className="w-5 h-5" />
          </CTA>
        </div>
      </div>
    </section>
  );
}

function MecanismoUnico() {
  return (
    <section
      id="mecanismo"
      className="py-20 md:py-28 px-6 text-white"
      style={{
        background:
          "linear-gradient(135deg, #1F1208 0%, #3D2817 50%, #5C3A22 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-sm font-semibold text-accent mb-4 tracking-wide uppercase">
              O que torna este ebook diferente
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-balance">
              A Mesa dos Profetas{" "}
              <span className="text-accent">não é um livro de receitas comum</span>
            </h2>
            <div className="gold-divider mt-6 !mx-0" />
            <p className="font-sans text-lg md:text-xl text-white/90 mt-8 leading-relaxed">
              É uma <strong className="text-white">reconstrução moderna</strong> de
              receitas inspiradas nas Escrituras — com ingredientes que você encontra
              no mercado da esquina, passo a passo claro e contexto espiritual em
              cada prato.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "História bíblica completa de cada alimento",
                "Referência do versículo e personagem",
                "Modo de preparo adaptado ao Brasil",
                "Explicação do porquê a combinação funciona",
                "Reflexão para aplicar na sua rotina de fé",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-white/90 text-base md:text-lg">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="/images/ebook-mockup.png"
              alt="Capa do ebook A Mesa dos Profetas"
              loading="lazy"
              className="w-full max-w-sm mx-auto drop-shadow-2xl"
            />
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
            ...e mais <strong className="text-foreground">15 receitas secretas</strong> que você não encontra em nenhum blog cristão
          </p>
          <CTA variant="primary">
            <Utensils className="w-5 h-5" />
            QUERO PREPARAR ESSAS RECEITAS HOJE
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
    subtitulo: "Cardápio da semana — café, almoço e jantar prontos",
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
            Bônus somem à meia-noite — não perca
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white text-balance leading-tight">
            Compre hoje e leve{" "}
            <span className="text-accent">R$ 111 em presentes</span> de graça
          </h2>
          <p className="font-serif italic text-lg md:text-xl text-white/80 mt-6 max-w-2xl mx-auto">
            Plano de 7 dias + lista de compras + guia dos alimentos — tudo que você precisa para{" "}
            <strong className="not-italic text-white">começar na cozinha ainda esta semana</strong>
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

        <div className="mt-14 pt-12 border-t border-white/15">
          <p className="font-sans text-sm font-semibold text-accent text-center mb-6 uppercase tracking-wider">
            Em breve — novos bônus exclusivos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {BONUS_FUTUROS.map((b) => (
              <div
                key={b.titulo}
                className="rounded-2xl border border-white/20 bg-white/5 p-5 opacity-80"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="w-4 h-4 text-accent" />
                  <span className="text-xs font-sans uppercase tracking-wider text-white/70">
                    Em breve
                  </span>
                </div>
                <h4 className="font-display font-bold text-lg text-white">
                  {b.titulo}
                </h4>
                <p className="font-sans text-sm text-white/70 mt-2">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <CTA variant="huge" showTrust>
            <Gift className="w-5 h-5" />
            Quero Acessar A Mesa dos Profetas
            <ArrowRight className="w-5 h-5" />
          </CTA>
          <p className="mt-4 font-sans text-sm text-white/70">
            Você economiza <strong className="text-accent">R$ 171</strong> neste
            lote · Menos que um delivery para mudar sua mesa para sempre
          </p>
        </div>
      </div>
    </section>
  );
}

function AutoridadeSection() {
  const stats = [
    { label: "Inscritos", value: YOUTUBE.subscribers },
    { label: "Visualizações", value: YOUTUBE.totalViews },
    ...(YOUTUBE.videoCount
      ? [{ label: "Vídeos", value: YOUTUBE.videoCount }]
      : []),
  ].filter((s) => s.value);

  return (
    <section id="autoridade" className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-sm font-semibold text-secondary mb-4 tracking-wide">
            Quem está por trás
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground text-balance leading-tight">
            Conheça o canal{" "}
            <span className="text-secondary">{YOUTUBE.channelName}</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-accent/20 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-foreground">
                  {YOUTUBE.channelName}
                </h3>
                <p className="font-sans text-sm text-muted">YouTube</p>
              </div>
            </div>
            <p className="font-sans text-base md:text-lg text-foreground/85 leading-relaxed">
              {YOUTUBE.tagline}
            </p>
            <p className="font-sans text-base text-foreground/85 mt-4 leading-relaxed">
              Se você já acompanha nossos vídeos, este ebook é a{" "}
              <strong>continuação prática</strong> — receitas completas para levar
              os princípios bíblicos para a sua cozinha.
            </p>
            <a
              href={YOUTUBE.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 min-h-[48px] px-6 py-3 rounded-full bg-foreground text-accent font-sans font-semibold hover:bg-secondary transition-colors"
            >
              <Youtube className="w-5 h-5" />
              Visitar o canal no YouTube
            </a>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl p-5 text-center border border-accent/20"
                >
                  <p className="font-sans text-xs uppercase tracking-wider text-muted">
                    {s.label}
                  </p>
                  <p className="font-display font-bold text-lg md:text-xl text-foreground mt-2 leading-snug">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 border-l-4 border-accent">
              <h3 className="font-display font-bold text-2xl text-foreground">
                Enzo Almeida Verde
              </h3>
              <p className="font-sans text-sm text-secondary mt-1">
                Autor, pesquisador e curador
              </p>
              <p className="font-sans text-base text-foreground/85 mt-4 leading-relaxed">
                Pesquisador da conexão entre fé, história e nutrição. Cada receita
                foi adaptada para ingredientes brasileiros comuns, sem complicação
                desnecessária.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["21 receitas testadas", "48 páginas", "Edição premium"].map(
                  (t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 bg-background px-3 py-1.5 rounded-full text-sm font-sans text-foreground"
                    >
                      <Check className="w-4 h-4 text-accent" />
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TESTEMUNHO_DESTAQUE = {
  nome: "Pr. João Almeida",
  idade: "62 anos",
  cidade: "Belo Horizonte, MG",
  contexto: "Pastor — estudos de família",
  texto:
    "Uso este material nos cultos de família. Cozinhar a Sopa de Lentilhas de Esaú enquanto leio Gênesis virou um momento sagrado em casa. Recomendo a todos os pastores e líderes!",
};

const TESTEMUNHOS = [
  {
    nome: "Maria Soares",
    idade: "68 anos",
    cidade: "São Paulo, SP",
    contexto: "Membro de célula",
    texto:
      "Substituí o pão branco pelo Pão de Ezequiel e em duas semanas senti a diferença. Mais energia e a reflexão espiritual antes de cada receita me emocionou.",
  },
  {
    nome: "Ana Carvalho",
    idade: "54 anos",
    cidade: "Curitiba, PR",
    contexto: "Dona de casa",
    texto:
      "A bebida de mel e ervas do João Batista tornou-se meu ritual da noite. O plano de 7 dias é fácil de seguir — café, almoço e jantar já vêm prontos.",
  },
  {
    nome: "Roberto Mendes",
    idade: "71 anos",
    cidade: "Salvador, BA",
    contexto: "Diabético — com orientação médica",
    texto:
      "Quando descobri o pão de cevada deste ebook, minha mesa ganhou sabor de verdade. Consultei meu médico e ele aprovou incluir as receitas na minha rotina.",
  },
  {
    nome: "Cláudia Ferraz",
    idade: "59 anos",
    cidade: "Recife, PE",
    contexto: "Estudo bíblico em casa",
    texto:
      "Cada página é uma aula de fé e nutrição. Já presenteei 3 amigas da igreja. Conteúdo claro e respeitoso.",
  },
  {
    nome: "Pra. Helena Vieira",
    idade: "65 anos",
    cidade: "Brasília, DF",
    contexto: "Escola dominical",
    texto:
      "Usei na escola dominical e mudou a forma como nossa igreja enxerga as Escrituras. Bíblia e mesa juntas, finalmente!",
  },
];

function DepoimentoCard({
  nome,
  idade,
  cidade,
  contexto,
  texto,
  destaque = false,
}: {
  nome: string;
  idade: string;
  cidade: string;
  contexto: string;
  texto: string;
  destaque?: boolean;
}) {
  return (
    <article
      className={`rounded-2xl p-6 md:p-8 shadow-sm flex flex-col ${
        destaque
          ? "bg-gradient-to-br from-foreground to-secondary text-white border-2 border-accent md:col-span-2"
          : "bg-background/70 hover:shadow-xl transition-shadow duration-300"
      }`}
    >
      <div className="flex gap-1 mb-4" aria-label="5 estrelas de avaliação">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5"
            fill="#D4AF37"
            stroke="#D4AF37"
          />
        ))}
      </div>
      <p
        className={`font-sans leading-relaxed flex-1 text-base md:text-lg ${
          destaque ? "text-white/95" : "text-foreground/90"
        }`}
      >
        &ldquo;{texto}&rdquo;
      </p>
      <footer
        className={`mt-5 pt-5 border-t ${
          destaque ? "border-white/20" : "border-foreground/10"
        }`}
      >
        <p
          className={`font-display font-bold text-lg ${
            destaque ? "text-accent" : "text-foreground"
          }`}
        >
          {nome}, {idade}
        </p>
        <p
          className={`font-sans text-sm mt-1 ${
            destaque ? "text-white/80" : "text-muted"
          }`}
        >
          {contexto} · {cidade}
        </p>
      </footer>
    </article>
  );
}

function Testemunhos() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-sm font-semibold text-secondary mb-4 tracking-wide">
            Indicado em estudos de família e células
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-balance leading-tight">
            O que dizem leitores de{" "}
            <span className="text-secondary">45 a 75 anos</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <DepoimentoCard {...TESTEMUNHO_DESTAQUE} destaque />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTEMUNHOS.map((t) => (
            <DepoimentoCard key={t.nome} {...t} />
          ))}
        </div>

        <p className="font-sans text-sm text-muted text-center mt-10 max-w-2xl mx-auto leading-relaxed">
          Se você tem condição de saúde (como diabetes), consulte seu médico
          antes de mudar a alimentação.
        </p>
      </div>
    </section>
  );
}

const ANTES = [
  "Confusão sobre o que comer de verdade",
  "Dependência de alimentos ultraprocessados",
  "Falta de inspiração para cozinhar em casa",
  "Refeições rápidas, sem propósito espiritual",
  "Cansaço, inflamação e digestão pesada",
  "Mesa distante dos princípios bíblicos",
];

const DEPOIS = [
  "Receitas naturais com passo a passo claro",
  "Ingredientes simples do supermercado comum",
  "Alimentação mais consciente e organizada",
  "Conexão entre fé e cada refeição",
  "Mais energia e leveza no dia a dia",
  "Família reunida em torno da mesa com propósito",
];

function TransformacaoSection() {
  return (
    <section id="transformacao" className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm text-secondary mb-4">
            A transformação
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground text-balance leading-tight">
            A transformação que sua{" "}
            <span className="text-secondary">mesa pode viver</span>
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

        <div className="text-center mt-12">
          <CTA variant="primary" showTrust>
            Quero Acessar A Mesa dos Profetas
            <ArrowRight className="w-5 h-5" />
          </CTA>
        </div>
      </div>
    </section>
  );
}

function OfertaSection() {
  return (
    <section
      id="oferta"
      className="py-20 md:py-28 px-6 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #3D2817 0%, #5C3A22 50%, #C67C4E 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-sm font-semibold text-accent mb-4 tracking-wide uppercase">
            Sua oferta completa
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight text-balance">
            Você recebe tudo isso{" "}
            <span className="text-accent">por um único pagamento</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-accent/30">
            <h3 className="font-display font-bold text-2xl text-white mb-6">
              O que está incluído:
            </h3>
            <ul className="space-y-4">
              {OFERTA_ITENS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-sans text-base md:text-lg text-white/95"
                >
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white text-foreground rounded-3xl p-8 md:p-10 shadow-2xl border-4 border-accent text-center">
            <p className="font-sans line-through text-2xl text-muted">
              De R$ {PRICE_FROM},00
            </p>
            <p className="font-display font-extrabold text-6xl md:text-7xl text-foreground mt-2 leading-none">
              R${PRICE_TO}
              <span className="text-2xl text-secondary">,00</span>
            </p>
            <p className="font-sans text-lg text-foreground mt-4">
              ou <strong>{INSTALLMENTS_COUNT}x de R$ {PRICE_INSTALLMENTS}</strong>{" "}
              no cartão
            </p>
            <UrgencyCountdownBlock variant="card" />
            <div className="mt-8">
              <CTA variant="huge" showTrust>
                Quero Acessar A Mesa dos Profetas
                <ArrowRight className="w-5 h-5" />
              </CTA>
            </div>
          </div>
        </div>
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

            <p className="font-sans text-lg md:text-xl text-foreground/85 mt-8 max-w-2xl mx-auto leading-relaxed text-balance">
              7 dias de garantia. Se o conteúdo não atender suas expectativas,
              você pode solicitar reembolso dentro do prazo —{" "}
              <strong className="not-italic text-secondary">
                devolvemos 100% do valor, sem perguntas.
              </strong>
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
    q: "É um livro físico ou digital?",
    a: "É um ebook digital em PDF. Você recebe por e-mail logo após a compra e pode ler no celular, tablet, computador ou imprimir em casa.",
  },
  {
    q: "Como recebo o ebook após a compra?",
    a: "Imediatamente. Após a confirmação do pagamento pela Hotmart, você recebe um e-mail com o link de acesso em PDF.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. O PDF abre no navegador ou em apps de leitura. Você pode aumentar o tamanho da letra para ler com conforto — ideal para quem prefere letra grande.",
  },
  {
    q: "Preciso seguir alguma religião específica?",
    a: "Não. O conteúdo é baseado nas Escrituras e pensado para quem valoriza fé e alimentação natural, independentemente da denominação.",
  },
  {
    q: "As receitas usam ingredientes caros ou difíceis de achar?",
    a: "Não. Todas foram adaptadas para ingredientes comuns em supermercados e feiras brasileiras — trigo integral, lentilha, figo, azeite, mel, legumes e grãos.",
  },
  {
    q: "Quanto tempo tenho de acesso?",
    a: "Acesso vitalício. Você baixa o PDF e fica com ele para sempre. Pode imprimir e usar quantas vezes quiser.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: `Cartão de crédito (até ${INSTALLMENTS_COUNT}x de R$ ${PRICE_INSTALLMENTS}), Pix, boleto bancário e PayPal. Checkout seguro pela Hotmart.`,
  },
  {
    q: "O que é um PDF e como abro no celular?",
    a: "PDF é um arquivo de leitura, como um livro digital. Toque no link do e-mail — o arquivo abre no navegador ou no app de arquivos do seu celular.",
  },
  {
    q: "Não recebi o e-mail. O que faço?",
    a: `Confira spam e lixeira. Se não achar, escreva para ${SUPPORT_EMAIL} ou chame no WhatsApp pelo botão verde na tela.`,
  },
  {
    q: "Existe garantia? E se eu não gostar?",
    a: "Sim. 7 dias de garantia incondicional. Se o conteúdo não atender suas expectativas, solicite reembolso dentro do prazo — devolvemos 100%, sem perguntas.",
  },
  {
    q: "Preciso saber cozinhar bem?",
    a: "Não. Cada receita tem passo a passo claro, pensado para quem cozinha no dia a dia. Se você sabe ferver água e usar fogão, consegue preparar.",
  },
  {
    q: "Posso usar em estudo de família ou célula?",
    a: "Sim. Muitas leitoras usam uma receita por semana, lendo a história bíblica e preparando juntas — funciona muito bem em grupos pequenos.",
  },
  {
    q: "Substitui orientação médica ou nutricional?",
    a: "Não. O ebook é educativo e espiritual. Se você tem condição de saúde (diabetes, alergias etc.), consulte seu médico antes de mudar a alimentação.",
  },
];

function FAQ() {
  return (
    <section
      id="duvidas"
      className="py-20 md:py-28 px-6 bg-gradient-to-b from-background to-white"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-sm font-semibold text-secondary mb-4 tracking-wide">
            Perguntas frequentes
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
                <p className="font-sans text-base text-foreground/85 leading-relaxed">
                  {f.a}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-[48px] px-6 py-3 rounded-full bg-[#25D366] text-white font-sans font-semibold text-base"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-sans text-base text-foreground hover:text-secondary font-medium"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
        <div className="text-center mt-8">
          <a
            href="#topo-barra"
            className="inline-flex items-center gap-2 font-sans text-base text-secondary hover:text-foreground min-h-[48px] px-4"
          >
            <ChevronUp className="w-5 h-5" />
            Voltar ao topo
          </a>
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
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 text-accent text-sm sm:text-base font-sans font-semibold mb-6">
          <Heart className="w-4 h-4" />
          Um convite para sua família
        </span>

        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-balance leading-tight">
          Durante milhares de anos, famílias se reuniram ao redor da mesa para
          compartilhar alimento, fé e comunhão.
        </h2>

        <p className="font-serif italic text-lg md:text-2xl text-white/90 mt-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Agora você também pode trazer esses princípios para dentro da sua
          casa — com receitas simples, ingredientes do mercado e um passo a passo
          que respeita sua rotina.
        </p>

        <div className="mt-10 max-w-lg mx-auto">
          <CTA variant="huge" showTrust>
            Quero Receber A Mesa dos Profetas
            <ArrowRight className="w-5 h-5" />
          </CTA>
          <p className="font-sans text-base text-white/75 mt-4 text-center">
            Abre a página de pagamento segura. O PDF chega no seu e-mail em poucos
            minutos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/90 hover:text-accent font-sans text-base min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" />
              Dúvidas no WhatsApp
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-sans text-base text-white/70 hover:text-accent transition-colors inline-flex items-center gap-2 min-h-[48px]"
            >
              <Mail className="w-4 h-4" />
              {SUPPORT_EMAIL}
            </a>
          </div>
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
              <a href="#problema" className="hover:text-accent transition-colors">
                Para quem é
              </a>
            </li>
            <li>
              <a href="#receitas" className="hover:text-accent transition-colors">
                Receitas
              </a>
            </li>
            <li>
              <a href="#oferta" className="hover:text-accent transition-colors">
                Oferta
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
              href={`mailto:${SUPPORT_EMAIL}`}
              className="hover:text-accent transition-colors"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-sans text-background/50">
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
      <SiteNav />
      <Hero />
      <ProblemaSection />
      <TransformacaoSection />
      <OQueVoceRecebe />
      <Galeria />
      <MecanismoUnico />
      <Testemunhos />
      <AutoridadeSection />
      <OfertaSection />
      <Bonus />
      <ComoFunciona />
      <Garantia />
      <FAQ />
      <CTAFinal />
      <Footer />
      <FloatingActions />
    </main>
  );
}
