import heroImage from "@/assets/hero-squash.jpg";
import logoImg from "@/assets/logo.jpeg";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511942045678?text=Olá%20Vitor,%20vim%20pela%20sua%20página%20e%20quero%20agendar%20minha%20aula%20experimental%20gratuita%20de%20squash";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Jogador de squash em ação na quadra"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
        <img
          src={logoImg}
          alt="Vieira Squash"
          className="h-10 md:h-14 w-auto"
          loading="eager"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center py-20">
        <div className="inline-block bg-secondary/20 border border-secondary/30 rounded-full px-5 py-1.5 mb-6">
          <span className="font-body text-secondary text-xs md:text-sm font-semibold tracking-wide uppercase">
            Aula experimental gratuita
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] mb-6">
          O TREINO MAIS<br />
          <span className="text-gradient-red">INTENSO</span> E<br />
          <span className="text-gradient-gold">VICIANTE</span> QUE EXISTE
        </h1>

        <p className="text-foreground/70 font-body text-base md:text-lg max-w-2xl mx-auto mb-4 font-light leading-relaxed">
          Queime até <strong className="text-secondary font-semibold">1.000 calorias por hora</strong>,
          melhore seu condicionamento e descubra o esporte que vai transformar sua rotina.
        </p>
        <p className="text-foreground/50 font-body text-sm md:text-base max-w-xl mx-auto mb-10">
          Mesmo que você nunca tenha pisado numa quadra de squash.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-10 py-5 rounded-full font-body font-bold text-base md:text-lg hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-xl animate-pulse-glow"
        >
          <MessageCircle className="w-6 h-6" />
          Quero agendar minha aula experimental gratuita
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary mt-2 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
