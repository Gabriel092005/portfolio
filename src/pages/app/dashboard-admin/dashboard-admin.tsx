import { Download, Star } from "lucide-react";
import image_Luge from "../../../assets/Captura de Ecrã (184).png";
import image_02 from "../../../assets/Captura de Ecrã (193).png";
import imagePna_03 from "../../../assets/Captura de Ecrã (226).png";
import image_04 from "../../../assets/Captura de Ecrã (236).png";
import image_06 from "../../../assets/IMGGABRI.png";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./projectcards";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { RecommendedProfessionals } from "./recomendations";
import { NewsletterDownload } from "./newLessester";


export function DashBoardAdmin() {
  return (
<div className="flex flex-col min-h-screen px-6 lg:px-32 pt-24 mt-0">


            <section className="text-center flex flex-col justify-center mt-10">
        <div className=" flex items-center justify-center">
            <div className="">
              <Avatar className="bg-blue-400 h-20 w-20 flex  items-center justify-center">
             <AvatarImage  src={image_06}></AvatarImage>
             </Avatar>
            </div>
        </div>
        <h1 className="text-3xl font-bold text-zinc-800 dark:text-white">Gabriel Cavala</h1>
        <h2 className="text-lg text-muted-foreground mt-1">
          Frontend Developer | Next.js | HTML | CSS | JS | Node.js | NestJS | ReactJs   | React Native-Learner
        </h2>
         <p className="text-muted-foreground text-sm max-w-md mx-auto mt-2">
          Desenvolvedor apaixonado por criar soluções que realmente fazem a diferença.
        </p>
      </section>
      {/* Apresentação */}
      <section className="text-center">
      
        <h1 className="text-4xl font-extrabold text-zinc-800 dark:text-muted">Faça seus parceiros se sentirem especiais</h1>
        <h2 className="text-2xl text-zinc-600 dark:text-zinc-300 font-medium mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officia accusamus vero voluptatem deserunt provident eligendi sequi repel.</h2>
       

        {/* Botão de contato + estrelas */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">

          <a href="/CV_ATUAL.pdf" download>
  <Button variant="default" className="flex items-center gap-2 rounded-xl h-10">
    <Download />
    Baixar Currículo
  </Button>
</a>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="text-yellow-500 h-4 w-4" />
            ))}
            <span className="text-xs text-muted-foreground ml-1">+10 avaliações</span>
          </div>
        </div>
      </section>

      {/* Bio */}


      <section className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
  <ProjectCard
  link=""
    title="Sistema de Gestão de Diabéticos Hipertensos"
    description="Usado na Polícia Nacional de Angola"
    image={imagePna_03}
  />
  <ProjectCard
    link=""
    title="LUGE"
    description="Sistema de Gestão de Energia Elétrica"
    image={image_Luge}
  />
  <ProjectCard
    link="f"
    title="Quintal"
    description="Rede Social de Proximidade"
    image={image_02}
  />
  <ProjectCard
    link="https://github.com/Gabriel092005/souangolano"
    title="Sou Angola - Web"
    description="Protótipo do jogo cultural angolano"
    image={image_04}
  />
</section>
<section>
  <RecommendedProfessionals/>
</section>
<section>
  <NewsletterDownload/>
</section>


      {/* Projetos */}
    
    </div>
  );
}
