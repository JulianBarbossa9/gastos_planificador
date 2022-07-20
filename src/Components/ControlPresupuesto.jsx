import { useState } from "react";
import { useEffect } from "react";



const ControlPresupuesto = ({gastos, valor}) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0)
        console.log( typeof totalGastado)
        const totalDisponible = valor - totalGastado 
        setGastado(totalGastado)
        setDisponible(totalDisponible)
    },[gastos])
    
    const converMoneda = (cantidad) =>{
        return cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    } 
    
    return (  
        <>
            <div className="contenedor-presupuesto contenedor sombra dos-columnas">
                <div>
                    <p>Aca va la grafica</p>
                </div>

                <div className="contenido-presupuesto">
                    <p>
                        <span>Presupuesto: </span>{converMoneda(valor)}
                    </p>
                    <p>
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