import React, { Fragment, useState } from 'react';
import HomeVisual from "./HomeVisual"
import Projects from "./Projects/Projects"
// import Feedback from "../Navbar/Sidebar/Feedback"
const Home = (props) => {
     const [load,setLoad] = useState(false)
    //  const [nombre,setNombre] = useState("")
    // const [api,setApi] = useState()

     let lanzar = props.carga

      // useEffect(() => { 
      //   const llamarNombre = async() =>{
      //     const llamar  = await fetch("https://backendjonathan-portafolio.herokuapp.com/api/jonathan")
      //     const nombre = await llamar.text()
      //     setNombre(nombre)
      // }
      // llamarNombre() 
      // },[])
 
    const welcome = [
        {saludar:"Hola",presentacion:`Mi nombre es Jonathan`,profesion:"Soy Web Developer",tools:"JSX,CSS,REACT,EXPRESS,MONGODB"}
    ] 
     
       if( lanzar)
       {
        setTimeout(() =>{
          setLoad(true)
         },888)
       }  

     setTimeout(() => {
      props.setNav(false)
  }, 20);

 
  //  useEffect(() =>{

  //     const LlamarApi = async () =>{
         
  //         const llamando = await fetch("https://backendjonathan-portafolio.herokuapp.com/api/feedback")
  //         const traido = await llamando.json()
           
  //        setApi(traido)
  //     }  

  //     LlamarApi()

  //  },[]) 

    return ( 
        <Fragment>
           {/* <Feedback></Feedback> */}
         <HomeVisual
          welcome={welcome}
          load={load}
         />
          <Projects/>
         
         </Fragment>
     );
}
 
export default Home;