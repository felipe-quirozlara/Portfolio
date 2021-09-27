import React from 'react';
import './tarjeta.css'

const Tarjeta = (props) => {

    const { nombre, imagen, resumen} = props

    return (
        <div className="tarjeta row">
            <div className="col">
                <h1>{nombre}</h1>
                <p>{resumen}</p>
            </div>
            <div className="col">
                <img src={imagen} />
            </div>
        </div>
    )
}

export default Tarjeta
