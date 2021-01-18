import React, { Fragment, useState } from 'react';
import styled from "styled-components"
 import Toggle from "./NavToggle"

const Mcnifica = styled.div`
@media (max-width:760px){
width: 1.7rem;
height:1.7rem;
position:fixed;
display:flex;
flex-flow:column;
justify-content:space-around;
cursor:pointer;
align-items:center;
top:25px;
z-index:300;
margin-left: ${({open}) => open ? `93px` : 0};
transition: margin-left 1.7s;
transition: all 2s;

div{
width:1.6rem;
height:0.33rem; 
border-radius: 500px; 
transform-origin:1px;
transition: 1.5s;

&:nth-child(1){
  transform: ${ ({ open }) => open ? `rotate(45deg)` : `rotate(0)` };
  background-color: ${({open}) => open ? `#9400d3`:  `#9400d3`};
}
&:nth-child(2){
    transform: ${({open}) => open ? `translateX(100%)` : `translateY(0)`};
    opacity: ${ ({open}) => open ? `0` : `1` };
    background-color: ${({nav}) => nav ? `white` : `black` }
}
&:nth-child(3){
    transform: ${ ({ open }) => open ? `rotate(-50deg)` : `rotate(0)` };
    background-color: ${({open}) => open ? `#00AAE4`: `#00AAE4`};
} 
} 
  }
`

 const CuartoDeLibra = ({nav}) => { 
     const [open,setOpen] = useState(false)
      return ( 
          <Fragment>

         
          <Mcnifica   open={open}  nav={nav} onClick={() => setOpen(!open)} >
            <div/>
            <div/>
            <div/>

          </Mcnifica>

           {
               open ? <Toggle  open={open}  nav={nav}  setOpen={setOpen} style={{opacity:1}} /> : <Toggle   style={{opacity:0,marginLeft:"200px"}}/>  
           }

           
          </Fragment>
      );
 }
  
 export default CuartoDeLibra;