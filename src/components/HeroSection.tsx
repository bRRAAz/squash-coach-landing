import heroImage from "@/assets/hero-squash.jpg";
import logoVitor from "../assets/logo_vitor.png";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511942045678?text=Olá%20Vitor,%20vim%20pela%20sua%20página%20e%20quero%20agendar%20minha%20aula%20experimental%20gratuita%20de%20squash";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Jogador de squash em ação na quadra"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* --- LOGO MINIMALISTA NO CANTO SUPERIOR ESQUERDO --- */}
      <div className="absolute top-6 left-6 md:top-10 md:left-12 z-20">
        <img
          src={logoVitor}
          alt="Logo Vitor Vieira"
          className="h-8 md:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-24 pb-20 md:pt-0 md:pb-0">
        {/* Removi a div de logo que estava aqui no centro para limpar o visual */}

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] mb-6">
          O TREINO MAIS<br />
          <span className="text-gradient-red">INTENSO</span> E<br />
          <span className="text-primary">VICIANTE</span> QUE EXISTE
        </h1>

        <p className="text-foreground/70 font-body text-base md:text-lg max-w-2xl mx-auto mb-4 font-light leading-relaxed">
          Queime até <strong className="text-primary font-semibold">1.000 calorias por hora</strong>,
          melhore seu condicionamento e descubra o esporte que vai transformar sua vida.
        </p>
        <p className="text-foreground/50 font-body text-sm md:text-base max-w-xl mx-auto mb-10">
          Mesmo que você nunca tenha pisado numa quadra de squash.
        </p>


      </div>
      <div className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary mt-2 rounded-full" />
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
