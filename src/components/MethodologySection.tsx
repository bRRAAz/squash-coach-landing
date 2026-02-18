import { Play, Zap, Flame, Eye, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Play,
    title: "Sinta o ritmo do jogo",
    description: "Desde o primeiro minuto, você entra na quadra e começa a jogar de verdade.",
  },
  {
    icon: Zap,
    title: "Entenda a velocidade",
    description: "Descubra como o squash trabalha seus reflexos e tomada de decisão em tempo real.",
  },
  {
    icon: Flame,
    title: "Experimente a queima",
    description: "Sinta na pele por que o squash é considerado um dos esportes mais completos.",
  },
  {
    icon: Eye,
    title: "Conheça a dinâmica",
    description: "Entenda as regras básicas e a lógica do jogo de forma prática e intuitiva.",
  },
  {
    icon: CheckCircle,
    title: "Saia entendendo tudo",
    description: "Ao final da aula, você já sabe como o esporte funciona e se é para você.",
  },
];

const MethodologySection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-xs uppercase tracking-[0.3em] mb-3 font-semibold">
            Metodologia
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-[hsl(var(--section-light-foreground))] mb-4">
            SUA PRIMEIRA AULA <span className="text-gradient-gold">NÃO É</span> SOBRE TÉCNICA
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto">
            É sobre <strong className="text-[hsl(var(--section-light-foreground))]">experiência</strong>. Você precisa sentir o esporte antes de qualquer coisa.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="flex items-start gap-5 bg-white/80 rounded-xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-display text-lg">
                {i + 1}
              </div>
              <div>
                <h3 className="font-display text-lg text-[hsl(var(--section-light-foreground))] mb-1">{s.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
