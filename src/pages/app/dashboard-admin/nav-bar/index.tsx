import { ModeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

    export function NavBar(){
        return(
               <div className="flex justify-center  fixed top-0 left-0  items-center  dark:bg-zinc-900 bg-white  ml-96  ">
       
             <div className=" flex items-center justify-between gap-10 m-6">
               <div className="flex flex-row items-center justify-center  ">
                  <ul className="flex items-center gap-5 justify-center text text-muted-foreground text-xs">
                     <li>
                      Inicio
                     </li>
                     <li>
                      Especialidades
                     </li>
                     <li itemID="projectos">
                      Projectos
                     </li>
                     <li>
                      Acerca
                     </li>
                     <li>
                     <ModeToggle/>
                     </li>
                  </ul>
               </div>
               <div>
   <a href="/CV_ATUAL.pdf" download>
  <Button variant="ghost" className="flex items-center gap-2 hover:bg-orange-600 rounded-xl bg-orange-500 h-10">
    <Download className="text-white" />
     <span className="text-white">Baixar Currículo</span>
  </Button>
</a>

               </div>
             </div>
           </div>
        )
    }