import { Flame, Heart, Smile, Zap, Users, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Flame,
    title: "ALTA QUEIMA CALÓRICA",
    description: "Até 1.000 calorias por hora — um dos esportes com maior gasto energético do mundo.",
    highlight: false,
  },
  {
    icon: Heart,
    title: "CONDICIONAMENTO FÍSICO",
    description: "Melhora cardiovascular, agilidade, reflexos e resistência em poucas semanas.",
  },
  {
    icon: Smile,
    title: "ALÍVIO DE ESTRESSE",
    description: "Descarregue a tensão do dia a dia com um esporte dinâmico e envolvente.",
  },
  {
    icon: Zap,
    title: "DINÂMICO E DIVERTIDO",
    description: "Ritmo acelerado que mantém você engajado do primeiro ao último minuto.",
  },
  {
    icon: Users,
    title: "NETWORKING",
    description: "Conecte-se com pessoas do mesmo perfil em um ambiente exclusivo e premium.",
  },
  {
    icon: TrendingUp,
    title: "EVOLUÇÃO EM 2 MESES",
    description: "Com acompanhamento profissional, a evolução é visível e mensurável rapidamente.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary font-body text-xs uppercase tracking-[0.3em] mb-3 font-semibold">
            Por que squash
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-[hsl(var(--section-light-foreground))]">
            BENEFÍCIOS QUE VOCÊ <span className="text-gradient-gold">SENTE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b) => (
            <div
              key={b.title}
              className={`group rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${b.highlight
                  ? "bg-primary/10 border-primary/30 hover:border-primary/50"
                  : "bg-white/80 border-border/30 hover:border-primary/30"
                }`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-cta-gradient group-hover:scale-110 transition-all duration-300">
                <b.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl text-[hsl(var(--section-light-foreground))] mb-2">{b.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
