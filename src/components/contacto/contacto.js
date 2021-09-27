import React from 'react';
import contacto from  '../icons/contacto.svg';
import './formulario.css'

const Contacto = () => {
    return (
        <div className="container col">
            <div className="row center">
                <img src={contacto} className="icono"/>
                <h1 className="titulo">Contacto</h1>
            </div>
            <div className="col">
                <form className="formulario center">  
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre"/>
                    <label for="telefono">Telefono</label>
                    <input type="tel" id="telefono" name="telefono"/>
                    <label for="correo">Correo</label>
                    <input type="tel" id="correo" name="correo"/>
                    <label for="mensaje">Mensaje</label>
                    <textarea>
                        
                    </textarea>
                    <input className="button" type="submit" value="Enviar mensaje"/>
                </form>
            </div>
        </div>
    )
}

export default Contacto
