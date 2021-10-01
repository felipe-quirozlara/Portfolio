import React from 'react'
import './hero.css'
import github from '../icons/github.svg'
import linkedin from '../icons/linkedin.svg'
import gmail from '../icons/gmail.svg'


const Hero = () => {

    

    return (
        <div className="container reverse row" >
            <div className="col">
                <div className="pad">
                    <h2 className="sub">Hola! soy </h2>
                    <h1 className="titu">Felipe Quiroz Lara</h1>
                    <p className="parr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum in ex sed sollicitudin. </p>
                    <div className="row " >
                        <a href="https://www.google.cl" className="padding3">
                            <img src={github} className="social"/>
                        </a>
                        <a href="https://www.google.cl" className="padding3">
                            <img src={linkedin} className="social"/>
                        </a>
                        <a href="https://www.google.cl" className="padding3">
                            <img src={gmail} className="social"/>
                        </a>
                    </div>
                </div>
                {/* Agregar social media */}
            </div>
            <div className="col">
                <img src="https://via.placeholder.com/390x550" />
            </div>
        </div>
    )
}

export default Hero
