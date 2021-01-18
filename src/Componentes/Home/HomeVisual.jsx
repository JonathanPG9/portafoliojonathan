import React, { Fragment } from 'react';
import "./Home.css"
import Video from "../Videos/videoHome.mp4"
import Boton from "@material-ui/core/Button"
import EmailIcon from '@material-ui/icons/Email';
import {makeStyles} from "@material-ui/core/styles" 
import {Link} from "react-router-dom";

  const useStyle = makeStyles({
     botonHome:{
          color:"white",
          fontStyle:"italic",
          textTransform:"capitalize", 
          fontSize:"20px"
      }
      
 })

 
const HomeVisual = (props) => {
    const classes = useStyle()
     return ( 
    <Fragment>
            <div className="home">
                <div id="video" className="home-video">
                <video  src={Video} type="video/mp4"  autoPlay loop muted playsInline/>  
                </div> 
 
               {
                   props.load ? 
                   <div className="home-body" style={{opacity:"1"}}>
                   <h2>{props.welcome[0].saludar}</h2>
                   <h2>{props.welcome[0].presentacion}</h2>
                   <h2>{props.welcome[0].profesion}</h2>
                   <span>{props.welcome[0].tools}</span> 
                   <Link className="link" to="/contacto">
                     <Boton  className={classes.botonHome}  size="medium"   startIcon={<EmailIcon/>} > 
                         Contactame 
                    </Boton> 
                   </Link> 
                   </div>
                   :
                   <div style={{color:"white",opacity:"0",marginTop:"130px", fontSize:"23px",fontWeight:"bold"}}/> 
                    
               }
 
             
            </div>
    </Fragment> 
    );
}
 
export default HomeVisual;