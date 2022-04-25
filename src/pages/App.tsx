import './App.css';
import {Home} from  './Home/';
import {About} from  './About/';
import {Layout} from  './Layout/';
import {Router} from  './Router';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>        
            <Route path='rotas' element={<Router />}></Route>        
            <Route path='about' element={<About />}></Route>        
         </Route>        
     </Routes>
  );
}

export default App;
