import heroImage from "@/assets/hero-squash.jpg";
import { MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre as aulas de squash.";
const INSTAGRAM_LINK = "https://instagram.com/seuperfil";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Jogador de squash em ação na quadra"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-primary font-body text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-medium">
          Professor de Squash
        </p>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-primary-foreground leading-[0.9] mb-6">
          EVOLUA SEU<br />
          <span className="text-gradient-brand">JOGO</span>
        </h1>
        <p className="text-primary-foreground/70 font-body text-base md:text-lg max-w-xl mx-auto mb-10 font-light leading-relaxed">
          Aulas personalizadas para todos os níveis. Do iniciante ao competidor,
          desenvolva técnica, estratégia e condicionamento físico.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-full font-body font-semibold text-base hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Agende sua Aula
          </a>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-body font-medium text-base hover:bg-primary-foreground/10 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            Siga no Instagram
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary mt-2 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
