import React, { useState } from 'react'
import Hamb from '../icons/hamburger.svg'
import close from '../icons/close.svg'

const Header = () => {

    const [nav, setNav] = useState("none")
    const [icon, setIcon] = useState("icon")
    // const [close, setClose] = useState("none")

    const navbarActivate = (e) =>{
        e.preventDefault();
        if(nav==="none"){
            setNav("navbarMobile")
            setIcon("none")
           
        }else{
            setNav("none")
            setIcon("icon")
        }
    };

    
    return (
        <header>
            <nav className="navbar">

                <div className="desktop">
                    <a className="home" href="#hero">Inicio</a>
                    <a className="link" href="#acercademi">Acerca de mi</a>
                    <a className="link" href="#habilidades">Habilidades</a>
                    <a className="link" href="#mistrabajos">Mis trabajos</a>
                    <a className="link" href="#contacto">Contacto</a>
                    <a className="felipe" href="#hero">Felipe Quiroz</a>
                </div>
                <div className="mobile">
                    
                    <img alt="" src={Hamb} className={icon} onClick={navbarActivate} />
                    <div className="list" >
                        <ul className={nav}>
                            <img alt="" src={close} className="close" onClick={(e)=>{setNav("none");setIcon("icon")}} />
                            <li><a className="link" href="#hero">Inicio</a></li>
                            <li><a className="link" href="#acercademi">Acerca de mi</a></li>
                            <li><a className="link" href="#habilidades">Habilidades</a></li>
                            <li><a className="link" href="#mistrabajos">Mis trabajos</a></li>
                            <li><a className="link" href="#contacto">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
