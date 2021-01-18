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
            
            const llamar = await fetch("https://backendjonathan-portafolio.herokuapp.com/api/pikachu")
            try{
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
        {id:0,titulo:"Sylvertron",parrafo:`Sylvertron .. is a game created, designed by me, a personal project / challenge that I set myself during the 
        summer of 2020 with more than 160 hours of development.`,
        tools :` Unity & C#` ,img:foto,},
        {id:1,titulo:"C.R.U.D",parrafo:`A simple CRUD application to be able to add & edit users, simple tasks and delete users/task`,
        tools: `JSX,CSS,React`,img:crud,},
        {id:2,titulo:"Pokedex",parrafo:`Un proyecto propio con un login simple que permite al usuario capturar Pokemones 
        gracias a la API de PokeAPi  tambien te permite tenerlos en una lista y tener batallas con tus propios Pokemones.`,pika:pikachu,tools:`JSX,CSS,React`,img:pokedex,},
    {id:3,titulo:"Tuinfy",parrafo:`Tuinfy es una pagina web que actualmente me encuentro trabajando en ella como Freelance React.js el producto
    es para una empresa nueva una Startup en LATAM.
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