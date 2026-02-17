import { AlertTriangle, XCircle, Frown } from "lucide-react";

const problems = [
  {
    icon: Frown,
    text: "Você já ouviu falar de squash, mas acha que é um esporte \"de nicho\" ou difícil demais para começar.",
  },
  {
    icon: XCircle,
    text: "Tentou jogar sozinho ou com amigos e não conseguiu evoluir — o esporte pareceu frustrante e sem graça.",
  },
  {
    icon: AlertTriangle,
    text: "Começar sem orientação técnica é o erro mais comum: você não evolui, se machuca e desiste antes de sentir os resultados.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-secondary font-body text-xs uppercase tracking-[0.3em] mb-3 font-semibold">
            O problema
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            POR QUE A MAIORIA <span className="text-gradient-green">DESISTE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-destructive" />
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 font-body text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
          A boa notícia? Com o <strong className="text-primary">treinador certo</strong>,
          você sente os resultados já na primeira aula.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
