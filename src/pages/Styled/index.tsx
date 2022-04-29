import { Code, SubTitle, Title } from "../style";

export function Styled(){
   return(
      <div>
         <Title>
            Uso do Styled Components
         </Title>

         <SubTitle>Passo 1:</SubTitle>
         <p>Instalação do componente:</p>
         <Code>
            <p>npm install --save styled-components</p>
            <p>ou</p>
            <p>yarn add styled-components</p>
         </Code>

         <SubTitle>Passo 2:</SubTitle>
         <p>Modo de uso</p>
         <Code>
            <p>import styled from 'styled-components'</p>

            <p>export const Title = styled.h2&#96;</p>

            <p>   font-family: sans-serif;</p>
            <p>   font-size:18px;</p>  
            <p>   padding:15px 0 0;</p>

            <p>&#96;;</p>
         </Code>

         <SubTitle>Passo 3:</SubTitle>
         <p>Mais detalhes:</p>

         <p>Ver o vídeo abaixo que ensina como usar o Styled components.</p>
         <a href="https://www.youtube.com/watch?v=R3S8DEzEn6s" target={"_blank"} rel="noreferrer" >https://www.youtube.com/watch?v=R3S8DEzEn6s</a>
      </div>
   );
}