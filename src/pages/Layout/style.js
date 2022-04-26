import styled from 'styled-components';

export const Menu = styled.nav`
   background-color:#fff  ;   
   padding:3px;   

   ul{
      list-style:none;
      display:flex;   
      justify-content:space-around;      
      padding-inline-start: 0;
   }

   a{
      text-decoration:none;
      font-family:sans-serif;
      font-size:1.4rem;
      color:#ff6600;
   }
   a:hover{
      text-decoration:underline;
   }

`;