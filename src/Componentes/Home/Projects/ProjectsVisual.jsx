import React, { Fragment } from 'react';
import "./Projects.css"
import Boton from "@material-ui/core/Button"
import EditIcon from '@material-ui/icons/Edit';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import BuildIcon from '@material-ui/icons/Build';
const ProjectsVisual = (props) => {
    return ( 
        <Fragment>
            <div className="titulos">
                <h1> {props.tittle}</h1>
            </div>
            <div className="projects">
            {props.proyectos.map(x => 
                      <div className="projects" key={x.id}>
                              <section  >  
                              <div className="card">
                                  <div className="card-img">
                                      <img src={x.img}   alt=""/>
                                  </div>
                                  <div className="projects-body">
                                      {
                                      x.id === 2 ? 
                                      <img src= {x.pika}  alt="" style={{width:"80px",height:"80px",marginTop:"-18px"
                                      ,position:"absolute"}}/> 
                                    :
                                    ""}
                                      <h1>{x.titulo}</h1>   
                                         <p>{x.parrafo} </p> 
                                         <p   >Herramientas: {x.tools}</p>
                                       {x.id ===  0  ? 
                                       <Boton color="secondary"   onClick={() => window.open(props.projectSylvertron)} startIcon={<SportsEsportsIcon/> } > 
                                          <h1>Ver mas...</h1>
                                      </Boton> 
                                      :"" }
                                        
                                      {x.id ===  1  ? 
                                       <Boton color="secondary" startIcon={<EditIcon/> } > 
                                          <h1>Ver mas...</h1>
                                      </Boton> 
                                      :"" }
                                       {x.id ===  2  ? 
                                       <Boton color="secondary"   onClick={() => window.open(props.projectPikachu)}   startIcon={<SportsEsportsIcon/> } > 
                                          <h1>Ver mas...</h1>
                                      </Boton> 
                                      :"" }
                                           {x.id ===  3  ? 
                                       <Boton color="secondary"     startIcon={<BuildIcon/> } > 
                                          <h1>En desarrollo...</h1>
                                      </Boton> 
                                      :"" }
                                      {x.id === 4  ? 
                                       <Boton color="secondary"  onClick={() => window.open(props.projectAuth)}      startIcon={<BuildIcon/> } > 
                                          <h1>Ver mas...</h1>
                                      </Boton> 
                                      :"" }

                                     { 
                                      x.id === 5 ?
                                      <Boton color="secondary"  onClick={() => window.open(props.projectPortafolio)}      startIcon={<BuildIcon/> } > 
                                      <h1>Ver mas...</h1>
                                  </Boton> 
                                    :"" }
                                     
                                     { 
                                      x.id === 6 ?
                                      <Boton color="secondary"  onClick={() => window.open(props.felty)}      startIcon={<BuildIcon/> } > 
                                      <h1>Ver mas...</h1>
                                  </Boton> 
                                    :"" }
                                         
                                  </div>
                              </div>
                         
                              </section>
                              </div>
                   )}
                   </div>
                   
                   <div className="effect"> 
        <svg fill="#FFFFFF" viewBox="0 0 1000 100"  >
          <path opacity="0.2" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 
         c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
          <path opacity="0.8" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1
          s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
          <path d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0
          h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"    ></path>
        </svg>
      </div>
        </Fragment>
     );
}
 
export default ProjectsVisual;