import { Award, Shield, Trophy, Users, Calendar, Star } from "lucide-react";

const credentials = [
  { icon: Shield, label: "Certificado pela World Squash Federation" },
  { icon: Calendar, label: "28 anos praticando squash" },
  { icon: Award, label: "20 anos como professor — desde 2006" },
  { icon: Trophy, label: "5º melhor jogador do Brasil em 2018" },
  { icon: Star, label: "Treinador do Clube Monte Líbano (2008–2017)" },
  { icon: Users, label: "Mais de 1.000 alunos treinados" },
];

const AuthoritySection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-secondary font-body text-xs uppercase tracking-[0.3em] mb-3 font-semibold">
              Seu treinador
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
              VITOR <span className="text-gradient-green">VIEIRA</span>
            </h2>
            <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Atleta profissional e treinador premium na zona sul de São Paulo.
              Uma carreira inteira dedicada a formar jogadores de squash de alto nível.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-foreground/90 font-body text-sm leading-relaxed">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
