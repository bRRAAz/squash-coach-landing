import { MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre as aulas de squash.";
const INSTAGRAM_LINK = "https://instagram.com/seuperfil";

const Footer = () => {
  return (
    <footer className="py-10 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-display text-2xl text-secondary-foreground tracking-wide">
            SQUASH <span className="text-gradient-brand">COACH</span>
          </p>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-whatsapp/10 flex items-center justify-center text-whatsapp hover:bg-whatsapp hover:text-whatsapp-foreground transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <p className="font-body text-xs text-secondary-foreground/50">
            © 2025 Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
