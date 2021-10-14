import React from 'react'
import github from '../icons/github.svg'
import linkedin from '../icons/linkedin.svg'
import gmail from '../icons/gmail.svg'
import yo from '../../img/yo.jpg'


const Hero = () => {

    

    return (
        <div className="container reverse row" id="hero">
            <div className="col">
                <div className="pad">
                    <h2 className="sub">Hola! soy </h2>
                    <h1 className="titu">Felipe Quiroz Lara</h1>
                    <p className="parr">Programador full stack, enfocado en el desarrollo con tecnologías como <b>React, Django, Node.js</b></p>
                    <div className="row " >
                        <a href="https://github.com/felipe-quirozlara" rel="noreferrer" className="padding3" target="_blank">
                            <img alt="" src={github} className="social"/>
                        </a>
                        <a href="https://www.linkedin.com/in/felipe-quiroz-lara" rel="noreferrer" className="padding3" target="_blank">
                            <img alt="" src={linkedin} className="social"/>
                        </a>
                        <a href="mailto:felipe.i.quiroz.lara@gmail.com" rel="noreferrer" className="padding3" target="_blank">
                            <img alt="" src={gmail} className="social"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col">
                <img src={yo} className="imgyo" alt="Imagen de Felipe Quiroz"/>
            </div>
        </div>
    )
}

export default Hero
