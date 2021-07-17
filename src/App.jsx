import { Fragment,useState } from "react";
import Home from "./Componentes/Home/Home"
import Navbar from "./Componentes/Navbar/Navbar"
import About from  "./Componentes/About/About.jsx"
import Contacto from "./Componentes/Contacto/Contacto.jsx"
import Footer from "./Componentes/Footer/Footer"
import Sidebar from "./Componentes/Navbar/Sidebar/Feedback"
import Error from "./Componentes/404/Error"
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";

function App() {
     
   const   [nav,setNav] = useState(false)
   const  [carga,setCarga] = useState(false)

 
   window.addEventListener("load",()=>{
    let  loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;  
    setTimeout(()=>{
       setCarga(true)
     },loadTime + 444) 
   })
 
  return (
    <Fragment>
       
       {
         carga 
          ?
        <Fragment>
 <Router>
   <Sidebar/> 
      <Navbar
       nav={nav}
      /> 
        <Switch>
            <Route path="/" exact    >  
              <Home
              carga={carga}
              setNav={setNav}
              /> 
             </Route>
            <Route path="/about"   >
            <About
            setNav={setNav}
            />
            </Route>  
            
            <Route path="/contacto"   >
            <Contacto
            setNav={setNav}
            />
            </Route>   
            <Route    >
              <Error 
               setNav={setNav}
              /> 
            </Route>  
        </Switch>
        <Footer/> 
      </Router>
        </Fragment>
        :
        <div className="contenedor">
 
 
<div id="loader">
 
  <div id="box"> 
</div>
  <div id="hill">
<br/>
    <h4 style={{marginLeft:"10px",fontSize:"18px"}}>CARGANDO...</h4>
  </div>
 
</div> 
 </div>
       }
      
      
    </Fragment>
  );
}

export default App;
