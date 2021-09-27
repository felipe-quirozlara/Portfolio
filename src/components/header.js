import React from 'react'
import './header.css';
import Hamb from './icons/hamburger.svg'

const Header = () => {
    return (
        <nav className="navbar">
            <div className="desktop">
                <a className="home">Inicio</a>
                <a className="link">Acerca de mi</a>
                <a className="link">Habilidades</a>
                <a className="link">Mis trabajos</a>
                <a className="link">Contacto</a>
                <a className="felipe">Felipe Quiroz</a>
            </div>
            <div className="mobile">
                <img src={Hamb} className="icon" />
                <div className="list">
                    <ul>
                        <li>Inicio</li>
                        <li>Acerca de mi</li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
