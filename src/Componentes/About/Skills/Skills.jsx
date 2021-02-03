import React, { Fragment } from 'react';
import "./Skills.css"
import LaunchIcon from '@material-ui/icons/Launch';

const Skills = (props) => {
 

       
    return (
        <Fragment> 
 
            <div className="skills">
           
           <div className="skills-body">
                <div className="skills-body-texto">
                <h1> Habilidades </h1> 
                <p>
                Los conocimientos que tengo enfocados en el área del desarrollo de software fueron más que nada de manera autodidacta, pero he de admitir que los dos años de carrera me ayudaron aprender lógica/algoritmos/lenguajes de programación de una manera más rápida. Aun así también he hecho cursos de Programación, el más destacado fue en la UTN BA, el cual fue de JavaScript con una nota final de 10 , he realizado cursos en Acamica también sobre JavaScript , CSS , HTML y en CoderHouse el curso de React . Además he realizado las pruebas de LinkedIn sobre JavaScript, en el cual logré un puntaje mayor a 95%, y el examen de React que también pude aprobar de manera exitosa con un puntaje mayor al 70%. También poseo conocimientos del lado del servidor con una base de C# y con conocimientos muy solidos en NodeJs Express, es más  el backend de esta página está hecho con Express. <br/>
                <br/>
                   Herramientas que he usado en areas de trabajo son  Visual Studio Code , Git, Visual Studio, Postman , Jira, Github, Firebase ,Heroku , Redmine , Zoom , Gitlab , Teams, Trello, FileZilla, Spira, Slack, Unity , Microsoft Office.
                </p>
                
                     <div className="certi">
                         Certificados
                         
                         <LaunchIcon  className="lanzar" onClick={() => props.setCerti(!props.certi)} /> 
 
                     </div>
                </div>  
           </div> 
       </div>  
       
        </Fragment>
     );
}
 
export default Skills;