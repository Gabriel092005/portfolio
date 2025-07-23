
import { NavItem } from "../main-navigation/NavItem";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";


export function SideBar() {
  return (
    <>
           {/* <ModeToggle/>   */}
    
      <div className="md:hidden fixed top-0 left-0 w-full z-50 dark:bg-black bg-white  border-b px-4 py-2 flex items-center gap-4">
        <Sheet >
          <SheetTrigger>
            <Menu className="w-6 h-6 text-zinc-800 dark:text-white" />
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64  dark:bg-black ">
            <NavItem />
          </SheetContent>
        </Sheet>

        {/* Exemplo de título opcional */}
    
        <span className="text-sm font-semibold text-zinc-800 dark:text-white">Painel</span>
      </div>
    </>
  );
}
