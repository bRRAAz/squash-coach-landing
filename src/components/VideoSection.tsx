import { PlayCircle } from "lucide-react"; // Um ícone para dar um charme no título
import videoSquash from "@/assets/vitor-treino.mp4"; // Importe o vídeo da sua pasta assets

const VideoSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-alt"> {/* Mantém a cor de fundo igual à do treinador */}
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Título da Seção - Seguindo o padrão visual */}
          <div className="text-center mb-14">
            <p className="text-primary font-body text-xs uppercase tracking-[0.3em] mb-3 font-semibold">
              Performance
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
              O SQUASH EM <span className="text-gradient-red">AÇÃO</span>
            </h2>
          </div>

          {/* Container do Vídeo */}
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl bg-black">
            <video
              className="w-full h-full object-cover"
              controls
              muted
              playsInline
              poster="/src/assets/thumb-video.jpg" // Opcional: imagem que aparece antes do play
            >
              <source src={videoSquash} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>

            {/* Overlay sutil para combinar com o estilo */}
            <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 rounded-3xl"></div>
          </div>

          {/* Descrição abaixo do vídeo (opcional) */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Sinta a velocidade e a dinâmica do jogo. Uma experiência
              imersiva que leva seu jogo para o próximo nível.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;