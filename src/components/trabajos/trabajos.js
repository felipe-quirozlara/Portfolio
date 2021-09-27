import React from 'react';
import trabajo from '../icons/trabajos.svg';
import trabajos from '../../data/trabajos';
import Tarjeta from './tarjeta';

const Trabajos = () => {


    return (
        <div className="container col">
            <div className="row center">
                <img src={trabajo} className="icono"/>
                <h1 className="titulo">Mis trabajos</h1>
            </div>
            <div className="col">
                {trabajos.map((item)=>{
                    return <Tarjeta nombre={item.nombre} imagen={item.imagen} resumen={item.resumen} />
                })}
            </div>
        </div>
    )
}

export default Trabajos
