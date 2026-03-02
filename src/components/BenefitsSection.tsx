import { Flame, Heart, Smile, Zap, Users, TrendingUp, Clock, Infinity, Gauge, Home } from "lucide-react";

const benefits = [
  {
    icon: Flame,
    title: "ALTA QUEIMA CALÓRICA",
    description: "1.000 calorias por hora — um dos esportes com maior gasto energético do mundo.",
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
    icon: Home,
    title: "AULAS EM DOMICÍLIO",
    description: "Treinos personalizados que se adaptam ao seu espaço e à sua rotina, sem precisar sair de casa.",
  },
  {
    icon: TrendingUp,
    title: "EVOLUÇÃO EM 2 MESES",
    description: "Com acompanhamento profissional, a evolução é visível e mensurável rapidamente.",
  },

  {
    icon: Infinity,
    title: "CONSTÂNCIA",
    description: "Faça chuva ou faça sol, frio ou calor, você sempre consegue treinar.",
  },

  {
    icon: Clock,
    title: "PRATICIDADE E FLEXIBILIDADE",
    description: "Fácil de adaptar à sua rotina, mesmo com agenda cheia.",
  },

  {
    icon: Gauge,
    title: "INTENCIDADE E RESULTADOS",
    description: "30 minutos de squash podem equivaler a até 1 hora de esteira em gasto e intensidade.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-[hsl(var(--section-light-foreground))]">
            BENEFÍCIOS DO <span className="text-gradient-gold">SQUASH</span>
          </h2>
        </div>

        {/* Grid em 2 colunas para manter o conforto de leitura com os textos maiores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((b) => (
            <div
              key={b.title}
              className={`group flex items-start gap-5 rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${b.highlight
                ? "bg-primary/10 border-primary/30"
                : "bg-white/80 border-border/30 hover:border-primary/30"
                }`}
            >
              {/* Container do Ícone - Mantive o tamanho original w-12/h-12 */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-cta-gradient transition-all duration-300">
                <b.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Conteúdo com tamanhos originais */}
              <div className="flex flex-col">
                <h3 className="font-display text-xl text-[hsl(var(--section-light-foreground))] mb-2 leading-tight">
                  {b.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
