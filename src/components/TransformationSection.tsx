const stages = [
  {
    step: "01",
    title: "INICIANTE",
    description: "Primeira aula experimental. Sem experiência prévia necessária.",
    color: "text-muted-foreground",
  },
  {
    step: "02",
    title: "EVOLUÇÃO",
    description: "2 a 4 meses de treino estruturado, você perceberá uma evolução consistente na sua técnica e nos fundamentos essenciais do squash",
    color: "text-primary",
  },
  {
    step: "03",
    title: "CAMPEONATOS",
    description: "Preparado para competir em torneios amadores e sentir a adrenalina.",
    color: "text-accent",
  },
  {
    step: "04",
    title: "ALTA PERFORMANCE",
    description: "Nível avançado. Jogo estratégico, físico afiado e mentalidade competitiva.",
    color: "text-gradient-green",
  },
];

const TransformationSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent font-body text-xs uppercase tracking-[0.3em] mb-3 font-semibold">
            Jornada
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            SUA <span className="text-gradient-red">TRANSFORMAÇÃO</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((s) => (
            <div key={s.step} className="text-center">
              <p className={`font-display text-5xl md:text-6xl ${s.color} mb-3`}>{s.step}</p>
              <h3 className="font-display text-xl text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Arrow connector for desktop */}
        <div className="hidden lg:flex justify-center mt-8">
          <div className="flex items-center gap-2 text-muted-foreground/30">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-16 h-px bg-primary/30" />
                <div className="w-2 h-2 rotate-45 border-t-2 border-r-2 border-primary/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
