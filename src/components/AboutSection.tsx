const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-3 font-medium">
            Sobre
          </p>
          <h2 className="font-display text-4xl md:text-6xl mb-8">
            EXPERIÊNCIA E <span className="text-gradient-brand">PAIXÃO</span>
          </h2>
          <p className="font-body text-base md:text-lg leading-relaxed opacity-80 mb-6">
            Com mais de 10 anos de experiência no squash, dedico minha carreira a
            transformar jogadores de todos os níveis. Minha metodologia combina
            técnica refinada, preparo físico e inteligência tática para que você
            alcance resultados reais dentro e fora da quadra.
          </p>
          <p className="font-body text-base md:text-lg leading-relaxed opacity-80">
            Seja você iniciante buscando aprender os fundamentos ou um competidor
            querendo subir de nível, meu compromisso é com a sua evolução
            constante.
          </p>

          <div className="flex justify-center gap-12 mt-12">
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-gradient-brand">10+</p>
              <p className="font-body text-sm opacity-60 mt-1">Anos de experiência</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-gradient-brand">500+</p>
              <p className="font-body text-sm opacity-60 mt-1">Alunos treinados</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-gradient-brand">98%</p>
              <p className="font-body text-sm opacity-60 mt-1">Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
