import { resetFecha } from '../helpers'

import imgAhorro from '../img/icono_ahorro.svg'
import imgCasa from '../img/icono_casa.svg'
import imgComida from '../img/icono_comida.svg'
import imgGasto from '../img/icono_gastos.svg'
import imgOcio from '../img/icono_ocio.svg'
import imgSalud from '../img/icono_salud.svg'
import imgSuscrip from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
    ahorro: imgAhorro,
    comida: imgComida,
    casa: imgCasa,
    gastos:imgGasto,
    ocio: imgOcio,
    salud: imgSalud,
    subcripciones: imgSuscrip
}



const Gasto = ({gasto}) => {

    
    const {categoria, nombre, cantidad,id, fecha} = gasto
    return (  
        <>
           <div className="gasto sombra">
                <div className="contenido-gasto">
                    <img 
                        src={diccionarioIconos[categoria]} 
                        alt="iconos categoria" 
                    />
                    <div className="descripcion-gasto">
                        <p className="categoria">{categoria}</p>
                        <p className="nombre-gasto">{nombre}</p>
                        <p className="fecha-gasto">
                            Agregado el: {''}
                            <span>{resetFecha(fecha)}</span>
                        </p>
                    </div>
                </div>
                    <p className='cantidad-gasto'>${cantidad}</p>
           </div>
        </>
    );
}
 
export default Gasto;