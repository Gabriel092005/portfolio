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
                  <Button variant="default" className="flex rounded-xl h-10">
                     <Download/>
                     Baixar Currículo
                    
                  </Button>
               </div>
             </div>
           </div>
        )
    }