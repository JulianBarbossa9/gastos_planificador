import { useState, useEffect } from 'react'
import Mensaje from './Mensajes'
import BtnCerrar from '../img/cerrar.svg'

const NewFormPresupuesto = ({setNewVentana, animarVentana, setAnimarVentana, guardarGastos, gastoEditar, setGastoEditar}) => {
    
    
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mjsError, setMjsError] = useState('')
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')

    useEffect(()=> {
        if (Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    },[])
    
    const handleCerrar = () =>{
        // console.log('cerrando...');
        setAnimarVentana(false)
        setGastoEditar({})
        
        setTimeout(() => {
            setNewVentana(false)
        },300)

    }

    //Validación formulario
    const handleSubmit = (e) => {
        e.preventDefault()

        if([nombre, cantidad, categoria].includes('')){
            setMjsError('Todos los campos son obligatorios')

            setTimeout(() => {
                setMjsError('')
            },3000)
            return      
        }
        guardarGastos({nombre, cantidad, categoria, id, fecha})

    }

  
    
    return (  
        <>
            <div className="modal">
                <div className="cerrar-modal">
                    <img
                        src={BtnCerrar}
                        alt='Boton cerrar'
                        onClick={handleCerrar}
                        className='close'
                    />
                </div>

                <form
                    onSubmit={handleSubmit} 
                    className={`formulario ${animarVentana ? "animar": 'cerrar'}`}>
                    {mjsError && <Mensaje tipo='error'>{mjsError}</Mensaje> }
                    <legend>{gastoEditar.nombre ? 'Editar Gasto': 'Nuevo Gasto'}</legend>

                    <div className='campo'>
                        <label htmlFor='nombre'>Nombre Gasto</label>

                        <input
                            id='nombre'
                            type='text'
                            placeholder='Añada el nombre del gasto'
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            // onChange={}
                            />
                    </div>

                    <div className='campo'>
                        <label htmlFor='cantidad'>Cantidad</label>

                        <input
                            id='cantidad'
                            type='number'
                            placeholder='Añada la cantidad del gasto Ej: 9000'
                            value={cantidad}
                            onChange={(e) => setCantidad(Number(e.target.value))}
                            // onChange={}
                        />
                    </div>

                    <div className='campo'>
                        <label htmlFor='categoria'>Categoria</label>

                        <select 
                            id="categoria"
                            value={categoria}
                            onChange={e => setCategoria(e.target.value)}
                        >
                            <option value=''>--Seleccione--</option>
                            <option value='ahorro'>Ahorro</option>
                            <option value='comida'>Comida</option>
                            <option value='casa'>Casa</option>
                            <option value='gastos'>Gastos Varios</option>
                            <option value='ocio'>Ocio</option>
                            <option value='salud'>Salud</option>
                            <option value='subcripciones'>Subcripciones</option>

                        </select>
                    </div>

                    <input 
                        type='submit'
                        value={gastoEditar.nombre ? 'Editar Gasto': 'Añadir Gasto'}
                    />
                </form>

    
            </div>
        </>
    );
}
 
export default NewFormPresupuesto;