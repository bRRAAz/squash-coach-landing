import { MessageCircle, ShieldCheck } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511942045678?text=Olá%20Vitor,%20vim%20pela%20sua%20página%20e%20quero%20agendar%20minha%20aula%20experimental%20gratuita%20de%20squash";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-alt relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
          SUA EVOLUÇÃO<br />
          <span className="text-gradient-green">COMEÇA AGORA</span>
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed">
          Poucas vagas disponíveis na agenda do Vitor Vieira.
          Garanta sua aula experimental gratuita antes que acabe.
        </p>
        <p className="font-body text-xs text-muted-foreground/60 mb-10 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          Treinador certificado pela World Squash Federation
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-12 py-6 rounded-full font-body font-bold text-lg md:text-xl hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-2xl animate-pulse-glow"
        >
          <MessageCircle className="w-7 h-7" />
          Quero minha aula gratuita
        </a>

        <p className="mt-8 font-body text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Vitor Vieira — Treinador de Squash Premium
        </p>
      </div>
    </section>
  );
};

export default CtaSection;
