import React from 'react';
import './habilidades.css'
import habilIcon from '../icons/habilidades.svg';
import frontend from '../icons/frontend.svg';
import backend from '../icons/backend.svg';

const Habilidades = () => {
    return (
        <div className="container col ">
            <div className="row center ">
                <img src={habilIcon} className="icono"/>
                <h1 className="titulo">Habilidades</h1>
            </div>
            <div className="evenly ">
                <div className=" card ">
                    <img src={frontend} className="thum"/>
                    <h2 >Frontend</h2>
                    <hr/>
                    <p className="li">Me gusta el desarrollo frontend en técnlogias como React, Angular o javascript vanilla</p>
                    <p className="li">Javascript</p>
                    <p className="li">JQuery</p>
                    <p className="li">React</p>
                    <p className="li">Angular</p>
                    <p className="li">Git</p>

                </div>
                <div className=" card ">
                    <img src={backend} className="thum"/>
                    <h2 >Backend</h2>
                    <hr/>
                    <p className="li">Me gusta el desarrollo Backend en framework tales como Django Express y un poco Spring</p>
                    <p className="li">Javascript</p>
                    <p className="li">Python</p>
                    <p className="li">Java</p>
                    <p className="li">Django</p>
                    <p className="li">Express</p>

                </div>
            </div>
        </div>
    )
}

export default Habilidades
