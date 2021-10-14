import React, { useEffect } from 'react';
import brain from '../icons/brain.svg'
import AOS from "aos";
import "aos/dist/aos.css";
import cv from '../../data/docume.pdf';
import work from '../icons/work.svg'

const AcercaDeMi = () => {

    useEffect(() => {
        AOS.init({
            duration:2000,
        });
        AOS.refresh();
      }, []);
    // Aos effecto visuales

    return (
        <div className="container reverse"  id="acercademi">
            <div className="col" data-aos="fade-left">
                <img src={work} alt="Iconografía de persona trabajando" className="workicon" />
            </div>
            <div className="col" data-aos="fade-up">
                <div className="pad">
                    <div className="row">
                        <img src={brain} className="icono" alt=""/>
                        <h1 className="titulo">Acerca de mi</h1>
                    </div>
                    <p className="parr">
                        Hola!, soy Analista programador computacional. Apasionado por la tecnología y los gadgets. Me gusta el desarrollo backend y frontend en lenguajes como <b>Javascript</b>, <b>Python</b> entre otros. Me gusta aprender y obtener consejos de personas más experimentas. Soy alguien carismático y amable, preparado para aportar en grupos de trabajo.
                    </p>
                    <div className="col" id="cv">
                        <a href={cv} className="button" download>Descargar CV</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AcercaDeMi
