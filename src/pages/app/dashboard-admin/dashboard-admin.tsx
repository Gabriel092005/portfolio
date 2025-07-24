import {  Award, Download, Send, Star } from "lucide-react";
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
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Contact } from "./Contact";


export function DashBoardAdmin() {
  return (
<div className="flex flex-col min-h-screen px-6   lg:px-32 pt-24 mt-0 dark:bg-zinc-95 0">
        <div className="flex items-center justify-center gap-6 flex-col ">
                  <div className="flex items-center flex-col justify-center">
                {/* <p className="uppercase font-bold underline text-xs">Web Developer</p> */}
                  <h1 className="text-5xl font-bold    text-zinc-800 dark:text-muted">Olá, Eu sou Gabriel Cavala.</h1>
                    <p className="text-muted-foreground text-sm max-w-md mx-auto mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ad sunt voluptatibus explicabo omnis sed alias necessitatibus quae neque expedita quam harum, provident natus ducimus ipsum reiciendis ipsa. Esse, quo?
        </p>
    
               </div>
                   <div>
            <Button variant="ghost"  className="flex items-center gap-2 rounded-xl hover:bg-orange-600 text-white bg-orange-500 h-10">
      <Send/>
      Contactar

  </Button>
        </div>
        </div>

            <section className="text-center flex flex-col justify-center mt-10">

        <div className=" flex items-center justify-center">
            <div className="">
              <Avatar className="bg-orange-400 h-20 w-20 flex  items-center justify-center">
             <AvatarImage  src={image_06}></AvatarImage>
             </Avatar>
            </div>
        </div>
        <h1 className="text-3xl font-bold text-zinc-800 text-nowrap dark:text-white">Gabriel Cavala</h1>
        <h2 className="text-lg text-muted-foreground mt-1 mb-5">
          Frontend Developer | Next.js | HTML | CSS | JS | Node.js | NestJS | ReactJs   | React Native-Learner
        </h2>
        <Contact/>

        
      </section>
      {/* Apresentação */}
      <section className="text-center">
      
       

        {/* Botão de contato + estrelas */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">

          <a href="/CV_ATUAL.pdf" download>
  <Button variant="ghost" className="flex items-center hover:bg-orange-600 gap-2 rounded-xl h-10 bg-orange-500">
    <Download  className="text-white"/>
  <span className="text-white transition 1s">Baixar Currículo</span>
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
            <section   className="mt-12 grid gap- mr-48 lg:mr-0 lg:w-full w-[21rem]   p-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
 
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      viewport={{ once: true }}
     className="   mt-0 max-w-[55rem] "
    >
                <div className="flex justify-center items text-orange-600 ">
                 <span className="border rounded-xl p-1 border-orange-500 flex"> 
                  <Award/>
                    Experiência Profissional</span>
                </div>
                <div className="">
                  <Separator orientation="horizontal"  className="bg-orange-500 mt-4 "/>
                  <motion.ul 
                     initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      viewport={{ once: true }}
                  
                  className="flex flex-col items-start justify-center gap-4">
                      <li>
                        <h1 className="lg:text-2xl font-bold lg:text-nowrap  dark:text-muted text-zinc-800"><span className="text-orange-500">1.</span>  Tecno Excelência - Fullstack Developer </h1>
                        <p className="text-muted-foreground text-xs" >2024/2025</p>
                        
                      </li>

                      <li>
                        <h1 className="lg:text-2xl font-bold lg:text-nowrap   text-zinc-800 dark:text-muted"><span className="text-orange-500">2.</span>  Profecel - C# Developer </h1>
                        <p className="text-muted-foreground text-xs" >2025</p>
                      </li>
                          <li>
                        <h1 className="lg:text-2xl font-bold lg:text-nowrap dark:text-muted  text-zinc-800"><span className="text-orange-500">3.</span>  Nanotec_AO - IOT Developer (ESP32) </h1>
                        <p className="text-muted-foreground text-xs" >2025</p>
                      </li>
                  </motion.ul>
                </div>
            </motion.div>
</section>


           {/* <section   className="mt-1 grid gap- mr-48 lg:mr-0 lg:w-full w-[21rem]   p-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
 
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      viewport={{ once: true }}
     className="   mt-0 max-w-[55rem] "
    >
                <div className="flex justify-center items text-orange-600 ">
                 <span className="border rounded-xl p-1 border-orange-500">   Formação Acadêmica</span>
                </div>
                <div className="">
                  <Separator orientation="horizontal"  className="bg-orange-500 mt-4 "/>
                  <motion.ul 
                     initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      viewport={{ once: true }}
                  className="flex flex-col items-start justify-center gap-4">
                      <li>
                        <h1 className="lg:text-2xl font-bold lg:text-nowrap  dark:text-muted text-zinc-800"><span className="text-orange-500">1.</span>  IMPTEL </h1>
                        <p className="text-muted-foreground text-xs" >2021/2025</p>
                        
                      </li>

                      <li>
                        <h1 className="lg:text-2xl font-bold lg:text-nowrap   text-zinc-800 dark:text-muted"><span className="text-orange-500">2.</span>  Profecel - C# Developer </h1>
                        <p className="text-muted-foreground text-xs" >2025</p>
                      </li>
                          <li>
                        <h1 className="lg:text-2xl font-bold lg:text-nowrap dark:text-muted  text-zinc-800"><span className="text-orange-500">3.</span>  Nanotec_AO - IOT Developer (ESP32) </h1>
                        <p className="text-muted-foreground text-xs" >2025</p>
                      </li>
                  </motion.ul>
                </div>
            </motion.div>
</section> */}

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
<section className="bg-white ">
</section>


  <NewsletterDownload/>
      {/* Projetos */}
    
    
    </div>
  );
}
