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
                          <li className="link-name"  >
                      <Link  className="link-name"   to="/">
                       Jonathan 
                        </Link >
                         </li>
                            <li>
                        <Link className="link"  to="/">
                            Inicio 
                        </Link>
                         </li>
  <li>    
                        <Link className="link"    to="/about"  >
                               Sobre mi 
                        </Link>
                          </li>
                            <li>   
                        <Link className="link"   to="/contacto"  >
                              Contacto   
                        </Link>
                        </li>
                    </ul>
                    
                </nav>

            </header>
           
        </Fragment>
    )
}

export default Navbar;