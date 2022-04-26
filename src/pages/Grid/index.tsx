import { Title } from "../style";
import './style.scss';

export function Grid(){
   return(
      <>
         <Title>Grid Layout</Title>
         <div className="container">
            <header>Header - grid-column: 1/4</header>
            <aside className="aside-left">
               aside left <br /><br />
               grid-column: 1/2;<br />
               grid-row: 2/4;<br />            
            </aside>
            <main>main - grid-row: 2/4;</main>
            <aside className="aside-right-top">
               aside right top <br /><br />
                  grid-column: 3/4;<br />
                  grid-row: 2/3;<br />
            </aside>
            <aside className="aside-right-botton">
               aside right botton<br /><br />
               grid-column: 3/4;<br />
               grid-row: 3/4;<br />
            </aside>
            <footer>footer - grid-column: 1/4;</footer>
         </div>

         <Title>Grid Layout usando Áreas</Title>
         <p>
            grid-template-areas: "h h h"<br />
                           "l m r1"<br />
                           "l m r2"<br />
                           "f f f";<br />

         </p>

         <div className="container2">
            <header>Header - grid-area: h; </header>
            <aside className="aside-left">
               aside left <br /><br />
               grid-area: l; 
            </aside>
            <main>main - grid-area: m;</main>
            <aside className="aside-right-top">
               aside right top <br /><br />
               grid-area: r1; 
            </aside>
            <aside className="aside-right-botton">
               aside right botton<br /><br />
               grid-area: r2; 
            </aside>
            <footer>footer - grid-area: f; </footer>
         </div>

      </>
      
   );
}