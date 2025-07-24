import { Separator } from "@/components/ui/separator";
import { GitBranch, Github, Linkedin, Mail, Phone } from "lucide-react";


export function Contact(){
    return(
        <>
                    <Separator orientation="horizontal"></Separator>
         <div className="flex  items-center justify-center mt-7">
             <ul className="flex flex-col lg:flex-row gap-5">
                 <li className="flex items-center justify-between gap-1 ">
                    <Mail size={14} className="text-orange-500 "/>
                  <span className="text-muted-foreground">gabrielcavalamanuel@gmail.com</span>
                 </li>

                   <li className="flex items-center gap-1 ">
                    <Phone size={14} className="text-orange-500 "/>
                  <span className="text-muted-foreground">+244 956 565 149</span>
                 </li>
                  <li className="flex items-center gap-1  ">
                    <Linkedin size={14} className="text-orange-500  gap-1 "/>
                  <span className="text-muted-foreground">Gabriel Cavala</span>
                 </li>

                     <li className="flex items-center gap-1 ">
                    <Github size={14} className="text-orange-500 "/>
                  <span className="text-muted-foreground">Gabriel Cavala</span>
                 </li>
                 
             </ul>
         </div>
        </>

    )
}