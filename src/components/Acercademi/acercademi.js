import React from 'react';
import './acercademi.css';
import brain from '../icons/brain.svg'

const AcercaDeMi = () => {



    return (
        <div className="container reverse">
            <div className="col">
                <div className="pad">
                    <div className="row">
                        <img src={brain} className="icono"/>
                        <h1 className="titulo">Acerca de mi</h1>
                    </div>
                    <p className="parr">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum in ex sed sollicitudin. Praesent arcu risus, ullamcorper eu ipsum ac, porta vehicula orci. Donec vulputate ornare felis, ac pulvinar risus posuere eget. Praesent arcu risus, ullamcorper eu ipsum ac, porta vehicula orci. Donec vulputate ornare felis, ac pulvinar risus posuere eget.
                    </p>
                    <div className="col" id="cv">
                        <a href="https://www.google.cl" className="button">Descargar CV</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <img src="https://via.placeholder.com/450x450" />
            </div>
        </div>
    )
}

export default AcercaDeMi
