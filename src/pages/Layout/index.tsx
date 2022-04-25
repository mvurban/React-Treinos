import { Link, Outlet } from "react-router-dom";
import {Menu} from './style'

export function Layout(){
   return(
      <div>         
      <Menu>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="../Rotas/">React Router 6</Link></li>
            <li><Link to="../Grid/">Grid Layout</Link></li>
            <li><Link to="../Styled/">Styled Components</Link></li>
            <li><Link to="../About/">About</Link></li>            
         </ul>
      </Menu>
      <Outlet />
   </div>
      
   );
}