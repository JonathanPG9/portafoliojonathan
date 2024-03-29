import React, {useState,useEffect, Fragment   } from 'react';
import styled from "styled-components"
import { useForm } from "react-hook-form";
import AddCommentIcon from '@material-ui/icons/AddComment';
import CloseIcon from '@material-ui/icons/Close';
const Side = styled.div`   
 display:flex;
 flex-flow:column; 
 height: 100vh;
 width:  ${({ open   }) => open ? `70vh` : `0px` };
  background-color: black; 
 transition: width 1s;   
 right:0; 
 top: 0;   
 z-index:200; 
 position:fixed;
  color:white; 
 word-wrap: break-word;
 text-align:center;
 overflow-y: scroll; 
 
 @media (max-width:760px){

    width:  ${({ open   }) => open ? `100%` : `0px` };
 }

form{
    display: flex;
    flex-flow:column;
    visibility:${({open}) => open ? "visible" : "hidden"  };
    opacity:${({open}) => open ? 1 : 0  };
    transition: visibility 0.3s linear 240ms, opacity 240ms;

}

label{
    margin:0;
    padding:0;
    opacity:${({open}) => open ? 1 : 0  };

}

 input{
     width:120px;
     opacity:${({open}) => open ? 1 : 0  };

 }
 textarea{
    height:70px;
     width:300px;
     margin:auto;
     max-width:300px;
     max-height:70px;
     min-height:60px;
     min-width:270px;
     opacity:${({open}) => open ? 1 : 0  };

 }
 span{
     color:red;
     opacity:${({open}) => open ? 1 : 0  };

 }

 button{
 width:80px; 
 margin:auto;
 opacity:${({open}) => open ? 1 : 0  };

 
 }
 li{
     list-style:none;
     display: ${({ open   }) => open ? `flex` : `none` };
     align-items:center;
     justify-content:center;
      
 }
 ul{
    visibility:${({open}) => open ? "visible" : "hidden"  };
    opacity:${({open}) => open ? 1 : 0  };
    transition: visibility 0.3s linear 300ms, opacity 0s;
     box-shadow: 3px 3px 15px  inset white; 
     flex-flow:column;
     width:99%; 
     margin-left:3.5px;
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
 .close{
    transform:scale(1.5);    
    top: 10px;     
   z-index:230; 
  position:fixed; 
  color:white; 
  cursor: pointer; 
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
      .then(alert("Gracias por tu comentario"))
      .catch( (error) => {
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
     
  
    
   
        
     const eliminar = (id) =>{
       
        fetch(`https://backendjonathan-portafolio.herokuapp.com/api/comentarios/${id}`, {
            method: 'DELETE'
         })
         .then(data => data.json())
         .then(traido => console.log(traido))
         .catch(err => console.log(err)) 
     }
      
    return ( 
          <Fragment>
            
            <Side   open={open}> 
            {
            open ?  
            <CloseIcon  className="close"  onClick={() => setOpen(!open)  }  />  
            :  
            <AddCommentIcon className="comments"  onClick={() => setOpen(!open)  }  /> 
            }
            

             

            <form onSubmit={handleSubmit(onSubmit)} >
            <h1 style={{marginTop:"10px"}}>Comentarios.</h1>
            <h3>¡Hola! Deja un comentario para saber qué te ha parecido la página.</h3>
            
                 <label> Nombre </label>
                 <input  name="nombre"  type="text" placeholder="Nombre" ref={register({
          required:{value:true,message:"Nombre Requerido"},
             pattern: {
            value: /^[ñA-Za-z_]*[ñA-Za-z][ñA-Za-z_]*$/i
            , message: "Por favor no ingrese espacios,numeros ni caracteres especiales"
            }
            })}/>
                 <span>{errors?.nombre?.message}</span>
                 <label >Comentario</label> 
                <textarea name="descripcion"   placeholder="Ingrese su comentario"  ref={register({
                    required: true, maxLength:100 , minLength: 5
                })} />
                <span>{errors.descripcion?.type === "required" && "Texto Requerido"}
                {errors.descripcion?.type === "maxLength" && "Lo siento el mensaje es demasiado largo!"} 
                {errors.descripcion?.type === "minLength" && "Lo siento el mensaje es demasiado corto!"} 

                </span>
                <br/>
                <button type="submit">Enviar</button> 
              
            </form>
            <br/>
           
           {
               comentarios.map( x =>
                   <ul key={x._id}   >
                        <li>
                           {x.nombre}
                           
                       </li>
                       <li>
                           {x.fecha}
                       </li>
                       <img src={x.avatar} alt="" style={{width:"30px"}}/>
           
                       <li>
                           {x.descripcion}
                       </li>
                       {/* <button  onClick={()=>{eliminar(x._id)}} >X</button> eliminar feedback */}
                   </ul>
               )
           }
  

         </Side>
         </Fragment>
      );
}
 
export default Feedback;