import React, { Fragment } from 'react';
import { Link  } from "react-router-dom";
import styled from "styled-components"

 const UL = styled.ul`  

  @media (max-width:768px){
   list-style:none;
   display:flex;
   flex-flow:column; 
   height: ${({ nav   }) => nav ? `100vh` : `110vh ` };
   width:  ${({ open   }) => open ? `180px` : `0px` }; 
   position:fixed;
   background-color: ${({ nav   }) => nav ?  `rgba(0,0,0, 0.94)` : `rgba(255,255,255, 0.9)` };
   z-index:200;
   opacity: ${({ open   }) => open ? 1 : 0 };
   transition: all 1s;   
   top: 0;  
  
  li{
      padding: ${({open}) => open ? `60px` : 0}; 
      transition: padding 1.3s;
      opacity: ${({ open   }) => open ? 1 : 0 }; 
       margin-top:23px;
  }
  .link:hover{
      color: red;
  }
  .links {
  list-style: none;
  opacity: ${({ open   }) => open ? 1 : 0 }; 
  text-decoration: none; 
  font-weight: bold; 
  position:sticky; 
 }

 .links-a{
     text-decoration: none;
    color: ${({nav}) => nav ? `white` : `black` };  
 }
 
}

 `
 
const NavTogle = (props) => {
  
    let open = props.open
    let nav = props.nav

    return ( 
        
        <Fragment>
            {
                open ? 
                <UL   open={open} nav={nav}    > 
                       
                <li    className="links"   >   
                 <Link className="links-a"  to="/"  onClick={() => props.setOpen(!open)} > 
                  Inicio 
                  </Link>
                </li>
          
            <li   className="links"  > 
               <Link className="links-a"  to="/about"  onClick={() => props.setOpen(!open)}  >
                    Sobre mi 
                </Link>
                </li>
             
              <li     className="links"    >   
                 <Link  className="links-a"   to="/contacto" onClick={() => props.setOpen(!open)}  >
                  Contacto
                 </Link> 
                  </li>

              
              </UL>
              :
              <UL/> 
             
            }

 
        </Fragment>
     );
}
 
export default NavTogle;