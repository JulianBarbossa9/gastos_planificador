import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"



const ControlPresupuesto = ({gastos,setGastos, valor, setValor, setIsValid }) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje ] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0)
        // console.log( typeof totalGastado)
        const totalDisponible = valor - totalGastado 
        // Calcular porcentaje
        const valorPorcentaje = (((valor - totalDisponible)/ valor) *100).toFixed(2)
       
        setGastado(totalGastado)
        setDisponible(totalDisponible)

        setTimeout(() => {
            setPorcentaje(valorPorcentaje)
        },800)
    },[gastos])
    
    const converMoneda = (cantidad) =>{
        return cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    } 

    const handleResetApp = () => {
        const result = confirm('¿Desea resetear la app?')
        if (result){
            setGastos([])
            setValor(0)
            setIsValid(false)
        } 
    }
    
    return (  
        <>
            <div className="contenedor-presupuesto contenedor sombra dos-columnas">
                <div>
                    <CircularProgressbar
                        styles={buildStyles({
                            pathColor:porcentaje > 100 ? '#DC2626' : '#2d393c',
                            trailColor:'#F5F5F5',
                            textColor: porcentaje > 100 ? '#DC2626' : '#2d393c'
                        })}
                        value={porcentaje}
                        text={`${porcentaje}% Gastado`}
                    />
                </div>

                <div className="contenido-presupuesto">
                    <button
                        className="reset-app"
                        type="button"
                        onClick={handleResetApp}
                    >
                        Resetear App
                    </button>
                    <p>
                        <span>Presupuesto: </span>{converMoneda(valor)}
                    </p>
                    <p className={`${disponible < 0 ? 'negativo': '' }`}>
                        <span>Disponible: </span>{converMoneda(disponible)}
                    </p>
                    <p>
                        <span>Gasto: </span> {converMoneda(gastado)}
                    </p>
                </div>
            </div>
        </>
    );
}
 
export default ControlPresupuesto;