import React, { Fragment } from "react"
import "./Navbar.css"
import { Link  } from "react-router-dom";
import CuartoDeLibra from "./CuartoDeLibra"
const Navbar = ({nav}) => {

    return ( 
            
         <Fragment>

            <header  className={nav ? "head-normal" : "head-nulo"}>
                <nav className={nav ? "nav-normal" : "nav-nulo"} >
                <CuartoDeLibra  nav={nav}  />
                    <ul className="nav-links"   >
                      <Link className="link-name"    to="/">
                      <li >  Jonathan </li>
                        </Link >
                        <Link className="link"  to="/">
                            <li>  Inicio </li>
                        </Link>
                        <Link className="link"    to="/about"  >
                            <li>    Sobre mi  </li>
                        </Link>
                        <Link className="link"   to="/contacto"  >
                            <li>   Contacto   </li>
                        </Link>
                       
                    </ul>
                    
                </nav>

            </header>
           
        </Fragment>
    )
}

export default Navbar;