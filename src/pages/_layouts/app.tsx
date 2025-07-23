
import { Outlet } from "react-router-dom";
import { SideBar } from "../app/dashboard-admin/sidebar/Sidebar";
import { NavBar } from "../app/dashboard-admin/nav-bar";
import { ModeToggle } from "@/components/theme/theme-toggle";


export  function AppLayout(){
  return(
    <div className="flex min-h-screen flex-col antialiased ">
         <div className="flex flex-1 flex-col ">
          <ModeToggle/>
           <NavBar/>
          <SideBar/>
        <Outlet/>
      </div>
    </div>
  )

}