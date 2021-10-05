import React, { useState } from 'react';
import db from '../../connection/firebase/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import contacto from  '../icons/contacto.svg';

const Contacto = () => {
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [correo, setCorreo] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [error, setError] = useState("")
    const [exito, setExito] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (nombre.trim() === '') {
            return setError("Es necesario rellenar todos los campos");
        }
        if (telefono.trim() === '') {
            return setError("Es necesario rellenar todos los campos");
        }
        if (correo.trim() === '') {
            return setError("Es necesario rellenar todos los campos");
        }
        if (mensaje.trim() === '') {
            return setError("Es necesario rellenar todos los campos");
        }
        else{
            setError("")
            setExito("Mensaje enviado con éxito!")
            try {
                const docRef = addDoc(collection(db, "contacto"), {
                    nombre:nombre,
                    telefono:telefono,
                    correo:correo,
                    mensaje:mensaje
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    };

    return (
        <div className="container col" data-aos="fade-up" id="contacto">
            <div className="row center">
                <img src={contacto} className="icono"/>
                <h1 className="titulo">Contacto</h1>
            </div>
            <div className="col">
                <form className="formulario center" onSubmit={handleSubmit}>  
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        name="nombre"
                        value={nombre}
                        placeholder="Nombre"
                        onChange={(e)=>setNombre(e.target.value)}
                    />
                    <label htmlFor="telefono">Telefono</label>
                    <input 
                        type="tel" 
                        id="telefono" 
                        name="telefono"
                        value={telefono}
                        placeholder="Telefono"
                        onChange={(e)=>setTelefono(e.target.value)}
                    />
                    <label htmlFor="correo">Correo</label>
                    <input 
                        type="tel" 
                        id="correo" 
                        name="correo"
                        value={correo}
                        placeholder="Correo"
                        onChange={(e)=>setCorreo(e.target.value)}
                    />
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        value={mensaje}
                        onChange={(e)=>setMensaje(e.target.value)}
                        placeholder="Mensaje"
                    >
                    </textarea>
                        <h2 style={{color:"red"}}>{error}</h2>
                        <h2 style={{color:"green"}}>{exito}</h2>
                    <input className="button" type="submit" value="Enviar mensaje"/>
                </form>
            </div>
        </div>
    )
}

export default Contacto
