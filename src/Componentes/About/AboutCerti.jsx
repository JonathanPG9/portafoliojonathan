import React, { Fragment } from 'react';
import "./AboutCerti.css"
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import styled from "styled-components"

const Certi = styled.div`
 
 @media (max-width:300px){
 
 .certificaciones{
     height: 100vh;
     
 }
 .arrows{
     opacity:0;

 }
  .certificados{
      height: 100%;
      background: none;
   color: white;
   font-size: 8px;
   display:none;

  }
  .certificados img{
     display:none;

  } 
}
 `
 const Error = styled.h2` 
  
    color:white;
    font-size:10px;
    display:none;
    justify-content:center;
    align-content:center;
    
    @media (max-width:300px){
        display:flex;

    }

 
 `
 const AboutCerti = (props) => {

   const nextJs = () =>{   
    props.certiJs === 9 ? props.setCertiJs(0) : props.setCertiJs(props.certiJs + 1)
   }
   const backJs = () =>{   
    props.certiJs <= 0 ?     props.setCertiJs(0) :  props.setCertiJs(props.certiJs - 1)
 }
   
    return (
      <Fragment>
          <Certi className="certificaciones" >   
       
          <FirstPageIcon  className="arrows" onClick={() =>  backJs()} /> 
          
       <div className="diplomas"    > 
           { 
              props.diplomas.map((x) => 
               
                   
                    <div className="certificados" key={x.id} >
                                 
                       {
                           x.id  === props.certiJs   ? <h2>{x.nombre}</h2>  : ""
                       } 
                       {
                           x.id === props.certiJs ?
                           <img src={x.imagen} alt=""/>
                            :
                            ""
                       }
                     </div>
               
               )
          }  
              <Error className="mostrar" >{props.diplomas[10].nombre}</Error>
             <br/>
                  <CancelPresentationIcon    className="close" onClick={() => props.setCerti(!props.certi)} /> 
        
                       
        </div> 
        <LastPageIcon  className="arrows" onClick={() =>  nextJs()} />
       </Certi>

      </Fragment>
      );
}
 
export default AboutCerti; 