const ControlPresupuesto = ({valor}) => {
    
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
                        <span>Presupuesto: </span> {converMoneda(valor)}
                    </p>
                    <p>
                        <span>Disponible: </span> {converMoneda(0)}
                    </p>
                    <p>
                        <span>Gasto: </span> {converMoneda(0)}
                    </p>
                </div>
            </div>
        </>
    );
}
 
export default ControlPresupuesto;