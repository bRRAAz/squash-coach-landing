import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lucas Mendes",
    text: "Em 3 meses de aula, meu jogo evoluiu mais do que em 2 anos treinando sozinho. Metodologia incrível!",
    stars: 5,
  },
  {
    name: "Ana Carolina",
    text: "Comecei do zero e hoje já participo de torneios. O professor tem uma paciência e didática fora do comum.",
    stars: 5,
  },
  {
    name: "Rafael Torres",
    text: "As aulas são intensas e focadas. Melhorei meu condicionamento e minha técnica drasticamente.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-3 font-medium">
            Depoimentos
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            O QUE DIZEM OS <span className="text-gradient-brand">ALUNOS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>
              <p className="font-body text-sm font-semibold text-foreground">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
