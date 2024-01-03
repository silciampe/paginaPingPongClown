import React from "react";
import './Principal.css'
import QuienesSomos from '../../assets/img/circulos/QuienesSomos.png'
import FotosYVideos from '../../assets/img/circulos/FotosyVideos.png'
import PagoVirtual from '../../assets/img/circulos/PagoVirtual.png'
import { Link } from 'react-router-dom';
/* import * as THREE from 'three' */

const Principal = () => {

    return(
        <div className="contenedor">
            <div className="contenedorinformacion">
            <Link to='/carpeta' >
                <div className="informacion">
                    <img src={QuienesSomos} alt="nosotros" className="nosotrosfoto"/>
                </div>
              {/*   <h3 className="hinformacion"><br />Información seria </h3> */}
            </Link>
            </div>
            <div className="contenedornosotros">
            <Link to= '/Nosotros' >
                <div className="nosotros">
                    <img src={FotosYVideos} alt="informacion"  className='informacionfoto'/>
                </div>
                {/* <h3 className="hnosotros"><br /> Sobre Nosotros</h3> */}
            </Link>
            </div>
            <div className="contenedorgorra">
            < Link to= '/Gorra '>    
                <div className="gorra">
                    <img src={PagoVirtual} alt="gorravirtual" className="gorrafoto"/>
                </div>
              {/*   <h3 className="hgorra"><br /> Gorra Virtual</h3> */}
            </Link>
            </div>
            <div className="burbujas">
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
            </div>
        </div>
    )
}

export default Principal