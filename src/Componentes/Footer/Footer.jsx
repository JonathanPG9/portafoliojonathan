import React, { Fragment,useState } from "react"
import "./Footer.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
const Footer = () => {
   
  
    const [mail,setMail] = useState(false)

    let linkedin = "https://www.linkedin.com/in/jonathan-paniagua-802703149/"
    let wsp = "https://api.whatsapp.com/send?phone=5491122856540&text=Hola%20Jonathan%20!"
    let github = "https://github.com/JonathanPG9"
    const up = () => {
      
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          }) 
    }

    return (
        <Fragment>
            
                <div className="footer"> 
             
                <footer>
                <GitHubIcon className="icon"  onClick={()=> window.open(github)}/>     
                <LinkedInIcon className="icon" onClick={() => window.open(linkedin)} />  
                <ArrowUpwardIcon  className="icon"   onClick={() => up() }  /> 
                <MailOutlineIcon className="icon"  onClick={() => setMail(!mail)} />   
                {
                    mail ? 
                    <div className="toggle-mail">
                    <h4>Hola :) , <br/>
                    Mi correo es Jonatanpaniagua21@gmail.com</h4>
                    </div>  
                    :
                    console.log()

                }
 
                <WhatsAppIcon className="icon" onClick={() => window.open(wsp)}    />
                
                </footer>
                 
                <div className="footer-line">
                            <p  onClick={() => up() } > © Jonathan Paniagua </p>   
                      
                     </div> 
                </div>
 
           
        </Fragment>
    )
}

export default Footer;