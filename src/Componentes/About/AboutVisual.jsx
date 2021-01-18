import React, { Fragment } from 'react';
import Skills from "./Skills/Skills"
import "./About.css"
 
const AboutVisual = (props) => {
    
    return ( 
        <Fragment>
            <div className="all"> 
             <div className="about">
           
           <div className="about-body">
                <div className="about-body-texto">
                <h1> Sobre mi </h1>
                <h4>Hola de nuevo  </h4>
                <p>
                    Mi nombre es Jonathan. Me considero una persona muy activa y autodidacta me encanta aprender cosas nuevas con el fin de poder
                    aplicarlo para poder resolver problemas de manera mas sencilla. Estuve en la carrera de Ingeneria en Sistemas en la Universidad
                    de Buenos Aires. Estuve cursando la carrera durante dos años y medio en este tiempo pude llegar a cambiar mi forma de ver las cosas
                    y pase a pensar las cosas de una forma mas Logica un cambio de paradigma le dicen... <br/>
                    En estos años me encontre con una barrera  que conocia desde adolescente que eran los Lenguajes de Programacion siempre me intereso
                    desde chico pero siempre estuvo el miedo de las Matematicas y Algebra. Una vez que pude romper con el miedo de las Matematicas y Algebra
                    en la Facultad me di cuenta que ese miedo era absurdo y que es mas no es  necesario ser un genio en matematicas para programar... <br/>
                    Ahi empezo el primer cambio y la epoca donde mas estuve metido aprendiendo lenguajes de programacion adentro y fuera de la facultad
                    empece por un clasico C++ migre a  C# hice varios proyectos en este lenguaje luego me intereso Python el cual logre hacer pequeños proyectos.
                    Pero luego conoci el lenguaje Javascript que fue el que mas gusto hasta ahora.. me encanta la libertad que te da este Lenguaje y la cantidad
                    de Frameworks e informacion que hay es siempre un constante aprendizaje . Actualmente llevo trabajando en React.js como Freelance hace mas de 6 meses 
                    con la fortuna de haber podido tener proyectos de manera continua y la suerte que el mes de Noviembre de 2020 se me presento una oportunidad muy grande como Freelance, tambien poseo un trabajo en relacion de dependencia como Quality Engineer desde 2019 en la empresa Globant  
                </p>
                </div> 
           </div>
        
       </div>
       <Skills
       certi={props.certi}
       setCerti={props.setCerti} 
       />
               
       </div>
        </Fragment>
     );
}
 
export default AboutVisual;