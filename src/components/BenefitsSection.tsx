import { Target, TrendingUp, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "TÉCNICA PRECISA",
    description: "Correção de fundamentos e aprimoramento de golpes para jogar com mais controle e confiança.",
  },
  {
    icon: TrendingUp,
    title: "EVOLUÇÃO CONTÍNUA",
    description: "Programa de treino progressivo adaptado ao seu nível e objetivos pessoais.",
  },
  {
    icon: Users,
    title: "AULAS INDIVIDUAIS",
    description: "Atenção total ao seu desenvolvimento com feedback personalizado em cada sessão.",
  },
  {
    icon: Zap,
    title: "CONDICIONAMENTO",
    description: "Melhore sua resistência, agilidade e explosão dentro da quadra.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-3 font-medium">
            Por que treinar comigo
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            MÉTODO QUE <span className="text-gradient-brand">FUNCIONA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-cta-gradient group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
