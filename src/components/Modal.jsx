import React from 'react'
import { useState, useEffect } from 'react'
import CerrarBrn from '../img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastosEditar}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')

    useEffect(()=>{
        if(Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    },[])

    const handleSubmit = e => {
        if([nombre, cantidad, categoria].includes('')){
            e.preventDefault()
            setMensaje('Todos los campos son obligatorios')
            setTimeout(()=>{
                setMensaje('')
            },3000)
            return
        }
        e.preventDefault()
        guardarGasto({nombre, cantidad, categoria, id, fecha})
    }

    const ocultarModal = () => {
        setAnimarModal(false)
        setGastosEditar({})
        setTimeout(()=>{
            setModal(false)
        },500)
    }

    return (
        <div className='modal'>
            <div className="cerrar-modal">
                <img src={CerrarBrn} alt="cerrar modal" onClick={ocultarModal} />
            </div>
            <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
            <legend>{gastoEditar.nombre ? 'Editar gasto' : 'Nuevo gasto'}</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                <div className="campo">
                    <label htmlFor="nombre">Nombre gasto</label>
                    <input type="text" placeholder='Escribe el nombre del gasto' id="nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input type="text" placeholder='Escribe la cantidad del gasto Ej: 10000' id="cantidad" value={cantidad} onChange={e => setCantidad(Number(e.target.value))} />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select 
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">--Seleccione--</option>
                        <option value="ahorro">Ahorros</option>
                        <option value="comida">Comida</option>
                        <option value="salud">Salud</option>
                        <option value="ocio">Ocio</option>
                        <option value="casa">casa</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="gastos">Gastos varios</option>
                    </select>
                </div>

                <input type="submit" value={gastoEditar.nombre ? 'Guardar cambios' : 'Agregar gastos'} />
            </form>
        </div>
    )
}

export default Modal