import {Code, SubTitle, Title} from '../style'

export function Router(){
   return(
      <>
         <Title>
            Uso do React Router Dom - Versão 6
         </Title>

         <SubTitle>
            Passo 1:
         </SubTitle>
         <p>Instale o componente:</p>
         <Code>
            <p>$ npm install react-router-dom@6</p>
            <p>ou</p>
            <p>$ yarn add react-router-dom@6</p>            
         </Code>
               
         <SubTitle>
            Passo 2:
         </SubTitle>
         <p>
            Siga esse passo a passo:<br /> 
            <a href="https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app" target={"_blank"} rel="noreferrer" >
               https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app
            </a>
         </p>

         <SubTitle>
            Passo 3:
         </SubTitle>
         <p>
            Para entender sobre menus aninhados, uso do Outlet etc acesse:<br />
            <a href="https://stackblitz.com/github/remix-run/react-router/tree/main/examples/basic?file=src/App.tsx" target={"_blank"} rel="noreferrer" >
               https://stackblitz.com/github/remix-run/react-router/tree/main/examples/basic?file=src/App.tsx
            </a>
         </p>  
      </>
   );
}