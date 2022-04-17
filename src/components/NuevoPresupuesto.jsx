import React from 'react'
import { useState } from 'react'
import Mensaje from './Mensaje'
const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault()
        if(!Number(presupuesto) || Number(presupuesto) < 0){
            setMensaje('No es un presupuesto valido')
            return
        }
        setIsValidPresupuesto(true)
    }
    
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' onSubmit={handlePresupuesto}>
                <div className="campo">
                    <label htmlFor="idpresupuesto">Definir presupuesto</label>
                    <input id='idpresupuesto' type="number" className='nuevo-presupuesto' placeholder='Introduce tu presupuesto' value={presupuesto} onChange={(e)=> setPresupuesto(Number(e.target.value))} />
                </div>
                <input type="submit" value="Añadir" />
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto