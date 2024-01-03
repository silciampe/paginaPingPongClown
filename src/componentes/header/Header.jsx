import React, { useState } from 'react';
import icono2 from '../../assets/img/icono2.png'
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Header = () => {

  return (
    <div>
        <nav>
            <input type="checkbox" id='check' />
            <label htmlFor="check" className='responsive'>
                <FontAwesomeIcon icon={faBars} className='check' />
            </label>
                <Link to='/principal' >
                    <div>
                    <img src={icono2} className='logo'/>
                    </div>
                </Link>
                <ul>
                    <li >
                        <Link to='/carpeta' className='informacionLink'>QUIENES SOMOS</Link>
                    </li>
                    <li >
                        <Link to='/nosotros' className='nosotrosLink'>FOTOS Y VIDEOS</Link>
                    </li>
                    <li >
                        <Link to='/gorra' className='gorraLink'>PAGO VIRTUAL</Link>
                    </li>
                    <li >
                    <Link to='/contacto' className='contactoLink'>Contacto</Link>
                    </li>
                </ul>
        </nav>
    </div>
    
  );
};

export default Header;