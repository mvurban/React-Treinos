
import { Link, Outlet } from "react-router-dom";
import { Menu } from './style'

export function Layout() {
  
   var showHamburgerMenu = false;

   
   function tougleMenu(){

      showHamburgerMenu = !showHamburgerMenu

      const menuContainer = document.querySelector(".menu-container")               

      menuContainer?.classList.toggle("on", showHamburgerMenu)
      document.body.style.overflow = showHamburgerMenu ? 'hidden' : '';
      
   }

   function closeMenu(){
      
      const menuContainer = document.querySelector(".menu-container")     
      menuContainer?.classList.remove("on")
      document.body.style.overflow = '';
      showHamburgerMenu = false;      
   }


   return (
      <div>
         <div className="menu-container">
            <div className="menu-tougle" onClick={()=>tougleMenu()}>
               <div className="one"></div>
               <div className="two"></div>
               <div className="three"></div>
            </div>
            <Menu>
               <ul>
                  <li><Link onClick={()=>closeMenu()} to="/" >Home</Link></li>
                  <li><Link onClick={()=>closeMenu()} to="../Rotas/">React Router 6</Link></li>
                  <li><Link onClick={()=>closeMenu()} to="../Grid/">Grid Layout</Link></li>
                  <li><Link onClick={()=>closeMenu()} to="../Styled/">Styled Components</Link></li>
                  <li><Link onClick={()=>closeMenu()} to="../About/">About</Link></li>
               </ul>
            </Menu>

         </div>
         <Outlet />
      </div>
   );
}