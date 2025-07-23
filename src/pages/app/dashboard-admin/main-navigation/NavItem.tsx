
import { Bell, Home, MessageSquare,Settings, Power} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Sair } from "./Sair";


export function NavItem() {
  const location = useLocation();
  const isActive = (path: string): boolean =>
    location.pathname === path;

  return (
    <div className="flex flex-col h-full justify-between p-5 ">
      <nav className="flex flex-col lg:flex-row gap-2">
        <Link
          to="/home"
          className={`
            flex items-center justify-start gap-3 w-full
            p-2 text-xs transition-colors duration-200
            ${
              isActive('/home')
                ? 'bg-[#F2F4F7] dark:bg-black dark:text-white text-blue-700 font-bold rounded'
                : 'text-gray-700 hover:text-blue-700'
            }
          `}
        >
          <Home className="h-5 w-5" />
          <span className="text-left font-bold">HOME</span>
        </Link>

        {/* Repita esses Links para as outras rotas, sempre com justify-start */}
        <Link
          to="/messages"
          className={`
            flex items-center justify-start gap-3 w-full
            p-2 text-xs transition-colors duration-200 lg:hidden
            ${
              isActive('/messages')
                ? 'bg-[#F2F4F7] dark:bg-black  dark:text-white  text-blue-700 font-bold rounded'
                : 'text-gray-700 hover:text-blue-700'
            }
          `}
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-left font-bold">MENSAGENS</span>
        </Link>

     
               <Link
          to="/home" 
          className={`
            flex items-center justify-start gap-3 w-full
            p-2 text-xs transition-colors duration-200
        
          `}
        >
          <Bell className="h-5 w-5 text-zinc-700" />
          <Dialog>
             <DialogTrigger disabled>
                   <span className="text-left font-bold text-zinc-700  ">NOTIFICAÇÕES</span>
             </DialogTrigger>
             <DialogContent>
       <h1 className="tracking-tight text-xl font-bold">Notificações</h1>



             </DialogContent>
          </Dialog>
        </Link>
     

               {/* <Link
               
          to="/dash"
          className={`
            flex items-center justify-start gap-3 w-full
            p-2 text-xs transition-colors duration-200
            ${
              isActive('/dash')
                ? 'bg-[#F2F4F7] dark:bg-black text-blue-700 dark:text-white font-bold rounded'
                : 'text-gray-700 hover:text-blue-700'
            }
          `}
        >
          <BarChart className="h-5 w-5" />
          <span className="text-left font-bold">DASHBOARD</span>
        </Link> */}

               <Link
          to="/home"
          className={`
            flex items-center justify-start gap-3 w-full
            p-2 text-xs transition-colors duration-200
            ${
              isActive('/config')
                ? 'bg-[#F2F4F7] text-blue-700 font-bold rounded'
                : 'text-gray-700 hover:text-blue-700'
            }
          `}
        >
          <Settings  className="h-5 w-5" />
          <span className="text-left font-bold">DEFINIÇÕES</span>
        </Link>


        {/* ... demais itens ... */}
      </nav>

      {/* base: botão de sair, também justificado à esquerda */}
      <Dialog>
        <DialogTrigger asChild>
          <Link
            to="/home"
            className="
              flex items-center justify-start gap-3 w-full
              p-2 text-xs text-gray-700 hover:text-red-700
            "
          >
            <Power className="h-5 w-5" />
            <span className="text-left font-bold">SAIR</span>
          </Link>
        </DialogTrigger>

          <Sair/>
      </Dialog>
    </div>
  );
}
