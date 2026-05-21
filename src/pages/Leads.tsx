import { useState } from "react";
import {
  Download,
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  BookOpen,
  MessageCircle,
  Mail,
} from "lucide-react";

const HOTMART_URL =
  "https://pay.hotmart.com/G105661402K?checkoutMode=10";
const PDF_URL = "/downloads/guia-dos-alimentos-da-biblia.pdf";
const SUPPORT_EMAIL = "contato@mesadosprofetas.com";
const WHATSAPP_NUMBER = "5598999068855";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Tenho uma dúvida sobre o Guia dos Alimentos da Bíblia."
)}`;

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

const btnPrimary =
  "inline-flex items-center justify-center gap-3 px-8 py-4 min-h-[48px] rounded-full font-sans font-bold text-base sm:text-lg bg-accent text-foreground hover:bg-accent-300 shadow-gold transition-all duration-300 cursor-pointer";

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
            <p className="font-sans text-sm font-semibold text-accent mb-5 tracking-wide">
              Guia gratuito · 15 páginas · PDF
            </p>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-balance">
              O Guia dos Alimentos da{" "}
              <span className="text-accent">Bíblia</span>
            </h1>
            <p className="font-sans text-lg md:text-xl mt-6 text-white/90 text-balance leading-relaxed">
              Os 10 segredos alimentares que sustentaram profetas, curaram reis
              e alimentaram multidões — linguagem clara, pronta para ler ou
              imprimir.
            </p>
            <p className="font-sans text-base md:text-lg mt-4 text-white/80 text-balance">
              Sem cadastro. Um clique e o arquivo baixa no seu celular ou
              computador.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <button type="button" onClick={handleDownload} className={btnPrimary}>
                <Download className="w-5 h-5" />
                {downloaded ? "Baixar novamente (PDF)" : "Baixar guia grátis (PDF)"}
              </button>
            </div>

            {downloaded && (
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-accent/20 border border-accent/40 text-accent text-base font-sans">
                <Check className="w-5 h-5" />
                Download iniciado — confira a pasta de downloads
              </div>
            )}

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 text-base">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-white/85">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span>100% gratuito</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-white/85">
                <Clock className="w-5 h-5 text-accent" />
                <span>Na hora</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-white/85">
                <BookOpen className="w-5 h-5 text-accent" />
                <span>Sem cadastro</span>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <img
              src="/images/guia-mockup.png"
              alt="Mockup do Guia dos Alimentos da Bíblia"
              className="relative w-full max-w-sm mx-auto drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-sm font-semibold text-secondary mb-4 tracking-wide">
              O que você vai descobrir
            </p>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-balance leading-tight">
              Os 10 alimentos sagrados da Bíblia
            </h2>
            <div className="gold-divider mt-6" />
            <p className="font-sans text-lg text-foreground/85 mt-6 max-w-2xl mx-auto leading-relaxed">
              Cada alimento foi escolhido por Deus para um propósito. Você vai
              entender o significado e como usar na sua mesa hoje.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {SEGREDOS.map((s) => (
              <div
                key={s.n}
                className="flex items-start gap-5 bg-background/60 border-l-4 border-accent rounded-r-xl p-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                  <span className="font-display font-bold text-lg text-accent">
                    {s.n}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    {s.nome}
                  </h3>
                  <p className="font-sans text-base text-muted mt-1">{s.subtitulo}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <button type="button" onClick={handleDownload} className={btnPrimary}>
              <Download className="w-5 h-5" />
              Baixar o guia completo agora
            </button>
            <p className="mt-4 text-base text-muted font-sans">
              PDF de 15 páginas · pode imprimir em casa
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
            <p className="font-sans text-sm font-semibold text-accent mb-5 tracking-wide">
              Quer o passo a passo completo?
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white text-balance leading-tight">
              21 receitas bíblicas na sua cozinha
            </h2>
            <p className="font-sans text-lg md:text-xl text-white/90 mt-6 leading-relaxed text-balance">
              Em <strong className="text-accent">A Mesa dos Profetas</strong>{" "}
              você recebe receitas completas, plano de 7 dias, lista de compras
              e reflexões espirituais — pagamento seguro na Hotmart.
            </p>

            <ul className="mt-8 space-y-3 text-left max-w-md mx-auto lg:mx-0 text-base">
              {[
                "21 receitas com história bíblica",
                "Plano alimentar de 7 dias",
                "Lista de compras para imprimir",
                "Garantia de 7 dias",
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

            <div className="mt-10 flex flex-col gap-4 items-center lg:items-start">
              <a href={HOTMART_URL} className={btnPrimary}>
                Ver ebook na Hotmart — pagamento seguro
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="font-sans text-base text-white/80 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent" />
                7 dias para experimentar — devolução total
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background/70 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-sans">
          <p>© 2026 A Mesa dos Profetas. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366] hover:brightness-110 min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-2 text-accent hover:text-accent-300 min-h-[48px]"
            >
              <Mail className="w-4 h-4" />
              {SUPPORT_EMAIL}
            </a>
            <a href="/" className="text-accent hover:text-accent-300 min-h-[48px] flex items-center">
              ← Página principal
            </a>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white font-sans font-bold text-base px-4 py-3 min-h-[48px] rounded-full shadow-2xl"
        aria-label="Dúvidas no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline">Dúvidas?</span>
      </a>
    </main>
  );
}
