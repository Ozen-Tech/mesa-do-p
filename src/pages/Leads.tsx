import { useState } from "react";
import {
  Download,
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  BookOpen,
  Sparkles,
} from "lucide-react";

const HOTMART_URL =
  "https://pay.hotmart.com/G105661402K?checkoutMode=10";
const PDF_URL = "/downloads/guia-dos-alimentos-da-biblia.pdf";

const SEGREDOS = [
  { n: "01", nome: "O Pão de Trigo", subtitulo: "O alimento que sustentou nações" },
  { n: "02", nome: "O Azeite de Oliva", subtitulo: "O óleo da unção e da cura" },
  { n: "03", nome: "O Mel", subtitulo: "O néctar da sabedoria" },
  { n: "04", nome: "As Frutas Vermelhas", subtitulo: "Os frutos da regeneração" },
  { n: "05", nome: "As Ervas Aromáticas", subtitulo: "Os remédios do deserto" },
  { n: "06", nome: "O Leite e o Queijo", subtitulo: "O alimento da força" },
  { n: "07", nome: "Grãos e Leguminosas", subtitulo: "O alimento da resistência" },
  { n: "08", nome: "O Peixe", subtitulo: "O alimento do milagre" },
  { n: "09", nome: "O Vinho Novo", subtitulo: "A bebida da celebração" },
  { n: "10", nome: "A Água", subtitulo: "O fundamento da vida" },
];

function triggerDownload() {
  const link = document.createElement("a");
  link.href = PDF_URL;
  link.download = "Guia-dos-Alimentos-da-Biblia.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Leads() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    triggerDownload();
    setDownloaded(true);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section
        className="relative py-20 md:py-28 px-6 text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1F3514 0%, #2D4A1F 40%, #3D2817 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #D4AF37 0%, transparent 45%), radial-gradient(circle at 80% 70%, #D4AF37 0%, transparent 45%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="font-sans uppercase tracking-[0.4em] text-accent text-xs md:text-sm mb-5">
              ✦ Guia Gratuito · 15 Páginas ✦
            </p>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance">
              O Guia dos Alimentos da{" "}
              <span className="text-accent">Bíblia</span>
            </h1>
            <p className="font-serif italic text-lg md:text-2xl mt-6 text-white/90 text-balance leading-relaxed">
              Os 10 Segredos Alimentares que sustentaram profetas, curaram reis
              e alimentaram multidões.
            </p>
            <p className="font-sans text-base md:text-lg mt-4 text-white/70 text-balance">
              Baixe gratuitamente e descubra os alimentos sagrados que a ciência
              moderna está apenas começando a entender.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-sans font-medium tracking-wide bg-accent text-foreground hover:bg-accent-300 shadow-gold hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                {downloaded ? "Baixado! Baixar Novamente" : "Baixar Guia Grátis (PDF)"}
              </button>
            </div>

            {downloaded && (
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 text-accent text-sm font-sans animate-fade-up">
                <Check className="w-4 h-4" />
                Download iniciado — confira sua pasta de downloads
              </div>
            )}

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 text-sm">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-white/80">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-white/80">
                <Clock className="w-4 h-4 text-accent" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-white/80">
                <BookOpen className="w-4 h-4 text-accent" />
                <span>Sem Cadastro</span>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div
              className="absolute -inset-8 rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <img
              src="/images/guia-mockup.png"
              alt="Mockup 3D do Guia dos Alimentos da Bíblia"
              className="relative w-full max-w-sm mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm text-secondary mb-4">
              O que você vai descobrir
            </p>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-balance leading-tight">
              Os 10 alimentos sagrados da Bíblia
            </h2>
            <div className="gold-divider mt-6" />
            <p className="font-serif italic text-lg text-muted mt-6 max-w-2xl mx-auto">
              Cada alimento foi escolhido por Deus para um propósito específico.
              Cada um pode transformar sua vida hoje.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {SEGREDOS.map((s) => (
              <div
                key={s.n}
                className="group flex items-start gap-5 bg-background/60 hover:bg-white border-l-4 border-accent rounded-r-xl p-5 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/15 group-hover:bg-accent flex items-center justify-center transition-colors">
                  <span className="font-display font-bold text-lg text-accent group-hover:text-white transition-colors">
                    {s.n}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {s.nome}
                  </h3>
                  <p className="font-serif italic text-sm text-muted mt-1">
                    {s.subtitulo}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-sans font-medium tracking-wide bg-foreground text-accent hover:bg-secondary hover:text-white shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Baixar o Guia Completo Agora
            </button>
            <p className="mt-4 text-sm text-muted font-sans">
              PDF de 15 páginas · 70 KB · Pronto para imprimir
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 md:py-28 px-6 text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #3D2817 0%, #5C3A22 50%, #C67C4E 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 70% 80%, #D4AF37 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/ebook-mockup.png"
              alt="A Mesa dos Profetas - Edição Premium"
              className="relative w-full max-w-xs mx-auto drop-shadow-2xl"
              loading="lazy"
            />
          </div>

          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 font-sans uppercase tracking-[0.3em] text-accent text-xs md:text-sm mb-5">
              <Sparkles className="w-4 h-4" />
              Quer ir além?
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white text-balance leading-tight">
              Conheça o passo a passo completo
            </h2>
            <p className="font-serif italic text-lg md:text-xl text-white/85 mt-6 leading-relaxed text-balance">
              Conhecer os 10 alimentos é só o começo. Em{" "}
              <strong className="text-accent not-italic font-semibold">
                A Mesa dos Profetas
              </strong>{" "}
              você recebe 21 receitas completas com história bíblica,
              ingredientes adaptados ao Brasil, modo de preparo passo a passo e
              explicação científica.
            </p>

            <ul className="mt-8 space-y-3 text-left max-w-md mx-auto lg:mx-0">
              {[
                "21 receitas bíblicas detalhadas",
                "Plano alimentar de 7 dias completo",
                "Lista de compras pronta para imprimir",
                "Reflexões espirituais para cada receita",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-sans text-white/90"
                >
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href={HOTMART_URL}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-sans font-medium tracking-wide bg-accent text-foreground hover:bg-accent-300 shadow-gold hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                Acessar A Mesa dos Profetas
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="mt-3 text-xs uppercase tracking-widest text-white/60">
                Acesso imediato · Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background/70 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans">
          <p>
            © 2026 A Mesa dos Profetas — Edição Premium. Todos os direitos
            reservados.
          </p>
          <a
            href="/"
            className="text-accent hover:text-accent-300 transition-colors"
          >
            ← Voltar para a página principal
          </a>
        </div>
      </footer>
    </main>
  );
}
