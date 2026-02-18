import { Award, Shield, Trophy, Users, Calendar, Star } from "lucide-react";
import treinadorImg from "@/assets/foto-treinador.jpeg";

const credentials = [
  { icon: Shield, label: "Certificado pela World Squash Federation" },
  { icon: Calendar, label: "28 anos praticando squash" },
  { icon: Award, label: "20 anos como treinador — desde 2006" },
  { icon: Trophy, label: "5º melhor jogador do Brasil em 2018" },
  { icon: Star, label: "Treinador do Clube Monte Líbano (2008–2017)" },
  { icon: Users, label: "Mais de 1.000 alunos treinados" },
];

const AuthoritySection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-xs uppercase tracking-[0.3em] mb-3 font-semibold">
              Treinador
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
              VITOR <span className="text-gradient-gold">VIEIRA</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
            <div className="flex-shrink-0">
              <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                <img
                  src={treinadorImg}
                  alt="Vitor Vieira — Treinador de Squash"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-muted-foreground font-body text-base md:text-lg max-w-xl leading-relaxed">
                Atleta profissional e treinador premium na zona sul de São Paulo.
                Uma carreira inteira dedicada a formar jogadores de squash a alcançar o alto nível.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-primary" />
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
