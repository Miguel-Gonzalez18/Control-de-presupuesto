import React from 'react'
import { useState, useEffect } from 'react'

const Filtros = ({filtro, setFiltro}) => {
    return (
        <div className='filtros sombra contenedor'>
            <form>
                <div className="campo">
                    <label htmlFor="filtro">Filtrar gastos</label>
                    <select id="filtro" value={filtro} onChange={e => setFiltro(e.target.value)}>
                        <option value="">--Todas las categorias--</option>
                        <option value="ahorro">Ahorros</option>
                        <option value="comida">Comida</option>
                        <option value="salud">Salud</option>
                        <option value="ocio">Ocio</option>
                        <option value="casa">Casa</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="gastos">Gastos varios</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros