import React from "react";
import './Footer.css';
import Facebook from '../../assets/img/iconos/Face.png'  
import Instragram from '../../assets/img/iconos/Instagram.png'  
import Wasap from '../../assets/img/iconos/Whatsapp.png'  



const Footer = () => {

    return(
        <footer>
            <div className="lineaPrincipal">
                <div className="linea1">
              {/*   <h2>hola</h2> */}
                </div>
                <div className="redes">
                    <a h href="https://www.facebook.com/pingpongclown2/" 
                    target='_blank'
                    rel="noopener noreferrer">
                    <img className="iconosFooter facebook" src={Facebook} alt="facebook" />
                  
                    </a>
                    <a h href="https://www.instagram.com/pingpongclown/?hl=es" 
                    target='_blank'
                    rel="noopener noreferrer">
                     <img className="iconosFooter" src={Instragram} alt="instagram" />        
                    </a>
                    <a h href="https://api.whatsapp.com/send?phone=3415592084" 
                    target='_blank'
                    rel="noopener noreferrer">
                     <img className="iconosFooter" src={Wasap} alt="wasap" />        
                    </a>
                </div>
                <div className="linea2">
                {/* <h2>hola</h2> */}
                </div>
            </div>
                <p className="derechos">Todos los derechos reservados <br /><b>Silvina Ciampechini</b></p>
        </footer>
        )
    }
    
    export default Footer