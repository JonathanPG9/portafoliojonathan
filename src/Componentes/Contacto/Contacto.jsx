import React, { Fragment,useEffect } from 'react';
import "./Contacto.css"
import { useForm } from "react-hook-form";
import Boton from "@material-ui/core/Button"
 
const Contacto = (props) => {

  useEffect(() =>{
    setTimeout(() => {
        props.setNav(true)
    }, 20);
})

    const { register, handleSubmit, errors } = useForm();

    const enviar = async (data,e) =>{
      alert("Mensaje enviado correctamente");

     e.target.reset()
   
      fetch("https://backendjonathan-portafolio.herokuapp.com/api/form", {
       method: "POST",
       body:JSON.stringify({
        nombre: data.nombre,
        asunto : data.asunto,
        mail: data.mail,
        texto: data.texto 
       }),
       headers:{
           "Content-Type": "application/json; charset=UTF-8"
       } 
      })   
      .catch(function() {
        alert("Uhm ha ocurrido un error quizas el servidor murio sorry t_t");
      });
  
     }
      

    return ( 
        <Fragment>
         <div className="contacto">
             <h1 style={{color:"white",fontSize:"44px"}}>Contactame</h1>
              <div className="contacto-body">
       <form onSubmit={handleSubmit(enviar)}   className="form">
           <label>Nombre</label>
           <span className="span"  >{errors?.nombre?.message}</span>  
       <input name="nombre" placeholder="Nombre" ref={register({
         required:{value:true,message:"Nombre Requerido"},
         pattern: {
            value: /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/i
            , message: "Por favor no ingrese espacios,numeros ni caracteres especiales"
          }
       })}/>
        <label>Email</label> 
       <span className="span"  >{errors?.mail?.message}</span>  
       <input name="mail"  type="email"  placeholder="Correo electronico" ref={register({
           required:{value:true,message:"Mail requerido"},
           pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
           message: "Email incorrecto por favor ingrese uno valido"}
       })}/>
       <label>Asunto</label>
       <span className="span">{errors?.asunto?.message}</span> 
       <input type="text" name="asunto" placeholder="Asunto.." ref={register({
          required:{value: true, message:"Asunto Requerido"}, 
       })}/>
        <label> Texto </label>
        <textarea  className="text"   name="texto" cols="30" rows="10"  placeholder="..."  ref={register({
           required:{value:true,message:"Texto Requerido"},
       })} /> 

<span  className="span">{errors?.texto?.message}</span>

  <br/>
    <Boton variant="contained" type="submit" color="secondary"   style={{textTransform:"capitalize",}}   > Enviar </Boton>  

    </form>
             </div>
         </div>
        </Fragment>
     );
}
 
export default Contacto;