import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './pages/App';


function toubleShaddow(){
   
   window.addEventListener("scroll", event => {
      const menuContainer = document.querySelector('.nav-container');
      if(window.scrollY > 30){
         if(!menuContainer?.classList.contains("scrolled"))
            menuContainer?.classList.add("scrolled")
      }
      if(window.scrollY <= 30){
         if(menuContainer?.classList.contains("scrolled"))
            menuContainer?.classList.remove("scrolled")
      }
   })
   
   //console.log(document.body.scrollTop);
   
}


document.body.onscroll = ()=>toubleShaddow()

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
         <App />
      </HashRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

