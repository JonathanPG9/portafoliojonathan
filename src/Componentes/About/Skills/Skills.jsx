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
                   Los conocimientos que tengo enfocados en el area del desarollo de software fueron mas que nada de manera  autodidacta pero he de admitir que los dos años de carrera me ayudaron aprender   logica/algoritmos/lenguajes de programacion de una manera mas rapida.
                   Aun asi tambien he hecho cursos de Programacion , el mas destacado fue en la  UTN BA el cual fue de Javascript con una Nota final de <b>10</b> , he realizado cursos en Acamica tambien sobre  Javascript , CSS , HTML y en Coderhouse el curso de React , tambien he realizado las pruebas de Linkedin sobre Javascript en el cual logre un puntaje mayor que al <b>95%</b> y en el examen de React que tambien pude aprobar de manera exitosa realizando un puntaje mayor al 70%. Tambien poseo conocimientos del lado del servidor con NodeJs Express es mas el backend de esta pagina esta hecho con Express , C# y y una base de Python.<br/>
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