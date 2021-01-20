import React, { Fragment } from 'react';
import { Link  } from "react-router-dom";
import styled from "styled-components"

 const UL = styled.ul`  

  @media (max-width:760px){
   list-style:none;
   display:flex;
   flex-flow:column; 
   height: ${({ nav   }) => nav ? `100vh` : `110vh ` };
   width:  ${({ open   }) => open ? `230px` : `0px` }; 
   position:fixed;
   background-color: ${({ nav   }) => nav ?  `rgba(0,0,0, 0.94)` : `rgba(255,255,255, 0.9)` };
   z-index:200;
   opacity: ${({ open   }) => open ? 1 : 0 };
   transition: all 1s;  
   right:0;
   position: sticky;
   top: 0;  
  
  li{
      padding: ${({open}) => open ? `80px` : 0}; 
      transition: padding 1.3s;
      opacity: ${({ open   }) => open ? 1 : 0 };
       color: ${({nav}) => nav ? `white` : `black` };  
  }
  .link:hover{
      color: red;
  }
  .link {
  list-style: none;
  opacity: ${({ open   }) => open ? 1 : 0 }; 
  text-decoration: none;
  color:black;
  font-weight: bold;
  cursor:pointer; 
  position:sticky;
 
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
                       
                <Link className="link"  to="/"     >
                    <li onClick={() => props.setOpen(!open)} >  Home </li>
               
                </Link>
                <Link className="link"    to="/about"  >
                    <li onClick={() => props.setOpen(!open)} >      Sobre    </li>
                </Link>
                <Link className="link"   to="/contacto"  >
                    <li onClick={() => props.setOpen(!open)} >   Contacto   </li>
                </Link>
              </UL>
              :
              <UL/> 
             
            }

 
        </Fragment>
     );
}
 
export default NavTogle;