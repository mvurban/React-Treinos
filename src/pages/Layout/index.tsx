import { Link, Outlet } from "react-router-dom";

export function Layout(){
   return(
      <div>         
      <nav>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="../Rotas/">React Router 6</Link></li>
            <li><Link to="../About/">About</Link></li>
            <li>teste</li>
         </ul>
      </nav>
      <Outlet />
   </div>
      
   );
}