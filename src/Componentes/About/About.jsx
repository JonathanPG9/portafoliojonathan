import React, { Fragment,useState,useEffect } from 'react';
import AboutVisual from "./AboutVisual" 
import AboutCerti from "./AboutCerti"
import jsUtn from "../Imagenes/jsUtn.png"
import jsPoo from "../Imagenes/jsPoo.jpg"
import jQuery from "../Imagenes/jQuery.jpg"
import css from "../Imagenes/css.jpg"
import html from "../Imagenes/html.jpg"
import csharp from "../Imagenes/csharp.jpg"
import lnJs from "../Imagenes/linkedinJs.png"
import react from "../Imagenes/react.png"

const About = (props) => {
    const[certiJs,setCertiJs] = useState(0)
     useEffect(() =>{
        setTimeout(() => {
            props.setNav(true)
        }, 20);
    })
     const[certi,setCerti] = useState(false)
       const diplomas = [
        {id:0,nombre:"UTN BA JS",nota:10,imagen:jsUtn,type:"js"},
        {id:1,nombre:"Linkedin Examen JS",nota:"95%",imagen:lnJs,type:"js"},
        {id:2,nombre:"Linkedin Examen React",nota:10,imagen:react,type:"js"},
        {id:3,nombre:"Acamica JS POO",nota:null,imagen:jsPoo,type:"js"},
        {id:4,nombre:"Acamica Jquery",nota:null,imagen:jQuery,type:"js"},
        {id:5,nombre:"Acamica CSS Avanzado",nota:null,imagen:css},
        {id:6,nombre:"Acamica HTML",nota:null,imagen:html},
        {id:7,nombre:"SoloLearn C#",nota:null,imagen:csharp}, 
        {id:8,nombre:"Error, Ancho de pantalla chico",estado:false}
    ] 

      return ( 
        <Fragment>
         
     
               {certi ?  
              <AboutCerti
              diplomas={diplomas}
              certi={certi}
              setCerti={setCerti} 
              certiJs={certiJs}
              setCertiJs={setCertiJs} 
              
              />
              :
              <AboutVisual 
              certi={certi}
              setCerti={setCerti} 
          
               /> 
            }
          
           
            
            </Fragment>

         
            
      );
}
 
export default About;