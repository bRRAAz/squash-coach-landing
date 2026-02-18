import { Clock, UserCheck, Package, MapPin, AlertCircle, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511942045678?text=Olá%20Vitor,%20vim%20pela%20sua%20página%20e%20quero%20agendar%20minha%20aula%20experimental%20gratuita%20de%20squash";

const details = [
  { icon: Clock, text: "Duração: 30 minutos" },
  { icon: UserCheck, text: "Aula individual ou em dupla" },
  { icon: Package, text: "Equipamento incluso (raquete e bolinha)" },
  { icon: MapPin, text: "Zona Sul de São Paulo — presencial" },
  { icon: AlertCircle, text: "Vagas limitadas na agenda" },
];

const TrialSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-light">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">


          <h2 className="font-display text-4xl md:text-6xl text-[hsl(var(--section-light-foreground))] mb-4">
            AULA <span className="text-gradient-gold">EXPERIMENTAL</span>
          </h2>

          <div className="inline-block bg-primary/20 border border-primary/30 rounded-full px-5 py-1.5 mb-6">
            <span className="font-body text-primary text-xs font-bold tracking-wide uppercase">
              100% Gratuita
            </span>
          </div>

          <p className="text-muted-foreground font-body text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Sua primeira aula é por nossa conta. Sem compromisso, sem pegadinha.
            Venha sentir o squash na prática.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 text-left max-w-2xl mx-auto">
            {details.map((d, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 bg-white/80 rounded-xl p-4 border border-border/30 
        ${details.length % 2 !== 0 && index === details.length - 1 ? 'sm:col-span-2 sm:justify-self-center sm:min-w-[calc(50%-8px)]' : ''}`}
              >
                <d.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-sm text-[hsl(var(--section-light-foreground))]/90">
                  {d.text}
                </span>
              </div>
            ))}
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-10 py-5 rounded-full font-body font-bold text-base md:text-lg hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-xl animate-pulse-glow"
          >
            <MessageCircle className="w-6 h-6" />
            Agendar minha aula gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrialSection;
