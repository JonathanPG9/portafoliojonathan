import React, { Fragment, useEffect,useState } from 'react';
import ProjectVisual from "./ProjectsVisual"
import foto from "../../Imagenes/sylvertron.png.png"
import pokedex from "../../Imagenes/pokedex.png"
import crud from "../../Imagenes/crud.jpg"
import pc from "../../Imagenes/imagen2.jpg"
 
const Projects = () => {
      
      const[pikachu,setPikachu] = useState()

  
     useEffect(() =>{
         
        const llamarPikachu = async () =>{
            
             try{
                const llamar = await fetch("https://backendjonathan-portafolio.herokuapp.com/api/pikachu") 
                const traido = await llamar.json()
                let img = await traido.sprites.front_default
                setPikachu(img) 
            }
            catch(err)
            {
                console.log(`uhm.. algo salio mal ${err}`)
            } 
          
        }
        llamarPikachu()
     },[])
   
  

    let tittle = "Proyectos"
    const proyectos = [
        {id:0,titulo:"Sylvertron",parrafo:` Sylvertron es un juego diseñado  y creado por mi durante el verano del 2020 con mas de 160 horas de desarollo.`,
        tools :` Unity & C#` ,img:foto,},
        {id:1,titulo:"C.R.U.D",parrafo:` Una simple aplicacion C.R.U.D que le permite al usuario crear , eliminar , actualizar y leer sus actividades creadas`,
        tools: `JSX,CSS,React`,img:crud,},
        {id:2,titulo:"Pokedex",parrafo:`Un proyecto propio con un login simple que permite al usuario capturar Pokemones gracias a la API de PokeAPI. También te permite tenerlos en una lista y tener batallas con tus propios pokemones.`,pika:pikachu,tools:`JSX,CSS,React`,img:pokedex,},
    {id:3,titulo:"Tuinfy",parrafo:`Tuinfy es una página web en la que me encuentro trabajando como Freelance  actualmente. El producto es para una nueva empresa Startup en LATAM.
    `,tools:`JSX,CSS,React,Firebase`,img:pc,}, 
    ]
    return ( 

        <Fragment>
            
               <ProjectVisual
                foto={foto}
               tittle={tittle}
               proyectos={proyectos}
               />
 
        </Fragment>
     );
}
 
export default Projects;