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
    <section className="py-20 md:py-28 bg-section-alt relative overflow-hidden">
      {/* Elemento decorativo de fundo para tirar o aspecto "morto" */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <p className="text-primary/80 font-body text-xs uppercase tracking-[0.3em] mb-3 font-semibold">
            O problema
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            POR QUE A MAIORIA <span className="text-secondary drop-shadow-sm">DESISTE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={i}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              {/* Ícone agora usa a cor Primária (Roxo) */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <p.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>

              <p className="text-muted-foreground font-body text-sm leading-relaxed group-hover:text-foreground/90 transition-colors">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 font-body text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
          A boa notícia? Com o <strong className="text-secondary">treinador certo</strong>,
          você sente os resultados já na primeira aula.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;