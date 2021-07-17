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
                <h4>Hola de nuevo  </h4>
                <h1> Sobre mi </h1> 
                <p>
                Mi nombre es Jonathan. Me considero una persona muy activa y autodidacta, me encanta aprender cosas nuevas con el fin de poder aplicarlas para resolver problemas de manera más sencilla. Estuve en la carrera de Ingeniería en Sistemas en la Universidad de Buenos Aires. Estuve cursando la carrera durante dos años , en este tiempo pude llegar a cambiar mi forma de ver las cosas y pasé a pensar las cosas de una forma más lógica, un cambio de paradigma le dicen...
                <br/>
                En estos años me encontré con una barrera que conocía desde adolescente que eran los Lenguajes de Programación. 
                Siempre me interesaron desde chico, pero siempre estuvo el miedo de las Matemáticas y Algebra. Una vez que pude romper con el miedo a éstas en la Facultad me di cuenta de que ese miedo era absurdo, y lo que es más, no es necesario ser un genio en matemáticas para programar...
                <br/>
                Ahí empezó el primer cambio y la época donde más estuve metido aprendiendo lenguajes de programación dentro y fuera de la facultad. Empecé por un clásico   a C#, hice varios proyectos el mas importante y grande fue un videojuego en Unity con este lenguaje y luego me intereso Python del cual logre hacer pequeños proyectos. Pero luego conocí el lenguaje JavaScript que fue el que más gusto hasta ahora. Me encanta la libertad que te da este Lenguaje y la cantidad de Frameworks e información que hay, es siempre un constante aprendizaje.
                Actualmente llevo trabajando en React.js como Freelance hace más de 5 meses con la fortuna de haber podido tener proyectos seguidos, y la suerte que en el mes de noviembre de 2020 se me presentó una oportunidad muy grande como Freelance. También poseo un trabajo en relación de dependencia en la empresa Globant desde 2019.  Actualmente como Web developer.
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