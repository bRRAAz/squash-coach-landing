import { Instagram, MessageCircle, ShieldCheck } from "lucide-react";
import logoVitor from "../assets/logo_vitor.png";
const INSTAGRAM_LINK = "https://instagram.com/Vitorsvieiras";

const WHATSAPP_LINK = "https://wa.me/5511942045678?text=Olá%20Vitor,%20vim%20pela%20sua%20página%20e%20quero%20agendar%20minha%20aula%20experimental%20gratuita%20de%20squash";

const CtaSection = () => {
  return (
    <section className="py-10 md:py-18 bg-section-alt relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* LOGO AREA - Ajustada para PNG transparente */}
        <div className="mb-20 flex flex-col items-center justify-center">
          <img
            src={logoVitor}
            alt="Logo Vitor Vieira"
            className="h-16 md:h-16 w-auto object-contain brightness-110 mb-4"
          />

        </div>


        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
          SUA EVOLUÇÃO<br />
          <span className="text-gradient-red">COMEÇA AGORA</span>
        </h2>

        <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed">
          Poucas vagas disponíveis na agenda do Vitor Vieira.
          Garanta sua aula experimental gratuita antes que acabe.
        </p>

        <p className="font-body text-xs text-muted-foreground/60 mb-10 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          Treinador certificado pela World Squash Federation
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-full font-body font-bold text-base hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>

          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-8 py-4 rounded-full font-body font-bold text-base hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
        </div>

        <p className="mt-8 font-body text-xs text-muted-foreground/50 border-t border-white/5 pt-8">
          © {new Date().getFullYear()} Vitor Vieira — Treinador de Squash Premium
        </p>
      </div>
    </section>
  );
};

export default CtaSection;