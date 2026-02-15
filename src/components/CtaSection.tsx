import { MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre as aulas de squash.";
const INSTAGRAM_LINK = "https://instagram.com/seuperfil";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6">
          PRONTO PARA<br />
          <span className="text-gradient-brand">COMEÇAR?</span>
        </h2>
        <p className="font-body text-base md:text-lg opacity-70 max-w-lg mx-auto mb-10 leading-relaxed">
          Entre em contato agora e agende sua primeira aula experimental.
          Dê o primeiro passo para transformar seu jogo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-10 py-5 rounded-full font-body font-bold text-lg hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            Falar no WhatsApp
          </a>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-primary/50 text-primary px-10 py-5 rounded-full font-body font-semibold text-lg hover:bg-primary/10 transition-all duration-300"
          >
            <Instagram className="w-6 h-6" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
