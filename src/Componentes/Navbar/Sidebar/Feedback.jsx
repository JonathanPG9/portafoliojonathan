import React, {useState,useEffect, Fragment   } from 'react';
import styled from "styled-components"
import { useForm } from "react-hook-form";
import ReplyIcon from '@material-ui/icons/Reply';

const Side = styled.div`   
 display:flex;
 flex-flow:column; 
 height: 100vh;
 width:  ${({ open   }) => open ? `70vh` : `0px` };
  background-color: black; 
 transition: all 1s;  
 right:0; 
 top: 0;   
 z-index:200; 
 position:fixed;
  color:white; 
 word-wrap: break-word;
 text-align:center;
 /* overflow-y: scroll; */
  
form{
    display: ${({open}) => open ? "flex" : "none"  };
    flex-flow:column
}

label{
    margin:0;
    padding:0;
}

 input{
     width:120px;
 }
 textarea{
    height:70px;
     width:300px;
     margin:auto;
     max-width:300px;
     max-height:70px;
     min-height:60px;
     min-width:270px;
 }
 span{
     color:red;
 }

 button{
 width:80px; 
 margin:auto;
 }
 li{
     list-style:none;
     display: ${({ open   }) => open ? `flex` : `none` };
     align-items:center;
     justify-content:center;
 }
 ul{
     box-shadow: 3px 3px 15px  inset white;
     display: ${({ open   }) => open ? `flex` : `none` };
     align-items:center;
     justify-content:center;
     flex-flow:column;
     
 }
 h1{
     display: ${({ open   }) => open ? `flex` : `none` };
     align-items:center;
     justify-content:center;
 }
 h3{   display: ${({ open   }) => open ? `flex` : `none` };
     align-items:center;
     justify-content:center;

 }
 
`

const Feedback = () => {
   
    const { register, handleSubmit, errors } = useForm();
    const [comentarios,setComentarios] = useState([])
    const [open,setOpen] = useState(false)

    const onSubmit = (data, e) => {
      

        console.log(data)
        e.target.reset() 

        fetch("https://backendjonathan-portafolio.herokuapp.com/api/comentarios", {
       method: "POST",
       body:JSON.stringify({
        nombre: data.nombre,
        descripcion : data.descripcion
       }),
       headers:{
           "Content-Type": "application/json; charset=UTF-8"
       } 
      })   
      .catch( () => {
        alert("Uhm ha ocurrido un error quizas el servidor murio sorry t_t");
      });
      
    }

    const llamarApi = async () =>{
        try {
            const llamando =  await fetch("https://backendjonathan-portafolio.herokuapp.com/api/comentarios/")
            const traidos =  await llamando.json()
            setComentarios(traidos) 
        } catch (error) {
            console.log(error)
        } 
    }
     
    useEffect(() =>{ 
          llamarApi() 
     },[comentarios]) 

    return ( 
          <Fragment>
        <ReplyIcon className="flecha"  onClick={() => setOpen(!open)}/>
           <Side  open={open}> 
 
             <h1 style={{marginTop:"10px"}}>Hola</h1>
            <h3>Deja tu comentario sobre que te parecio la pagina !</h3>
            

            <form onSubmit={handleSubmit(onSubmit)} >
                 <label> Nombre </label>
                 <input  name="nombre"  type="text" placeholder="Nombre" ref={register({
          required:{value:true,message:"Nombre Requerido"},
             pattern: {
            value: /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/i
            , message: "Por favor no ingrese espacios,numeros ni caracteres especiales"
            }
            })}/>
                 <span>{errors?.nombre?.message}</span>
                 <label >Comentario</label> 
                <textarea name="descripcion"   placeholder="..."  ref={register({
                    required: true, maxLength:40 , minLength: 5
                })} />
                <span>{errors.descripcion?.type === "required" && "Texto Requerido"}
                {errors.descripcion?.type === "maxLength" && "Lo siento el mensaje es demasiado largo!"} 
                {errors.descripcion?.type === "minLength" && "Lo siento el mensaje es demasiado corto!"} 

                </span>
                <br/>
                <button type="submit">Submit</button> 
              
            </form>
            <br/>
           
           {
               comentarios.map( x =>
                   <ul key={x._id}   >
                        <li>
                           {x.nombre}
                       </li>
                       <img src={x.avatar} alt="" style={{width:"30px"}}/>

                       <li>
                           {x.descripcion}
                       </li>
                   </ul>
               )
           }
  

         </Side>
         </Fragment>
      );
}
 
export default Feedback;