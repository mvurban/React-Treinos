import { SubTitle, Title } from "../style";

export function About(){
   return(
      <>
         <Title>Sobre o projeto</Title>
         <SubTitle>Motivação</SubTitle>
         <p>
            A ideia por traz desse projeto foi criar um ambiente onde se pudesse testar novidades, melhorar skills e treinar o desenvolvimento de 
            front-end em tecnologias modernas como o ReactJS e TypeScript.
         </p>
         <p>
            Além disso, também é uma forma de expandir o portifólio e mostrar as tecnologias que tenho domínio.
         </p>

         <SubTitle>Tecnologias</SubTitle>
         <p>
            <ul>
               <li>React JS</li>
               <li>JavaScript</li>
               <li>Styled Components</li>
               <li>React Router Dom V6</li>
               <li>Grid Layout</li>
               <li>Sass</li>
            </ul>
         </p>

      </>
      
   );
}