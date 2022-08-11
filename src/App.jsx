import { useState, useEffect } from "react";
import Header from "./Components/Header";
import { generarId } from "./helpers";
import NewFormPresupuesto from "./Components/NewFormPresupuesto";
import ListadoGastos from "./Components/ListadoGastos";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import { object } from "prop-types";

function App() {

  const [gastos, setGastos] = useState([]);
  
  const [valor, setValor] = useState();
  const [isValid, setIsValid] = useState(false);

  const [newVenta, setNewVentana] = useState(false);
  const [animarVentana, setAnimarVentana] = useState(false);

  const [gastoEditar, setGastoEditar ] = useState({}); //Objeto

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      // handleNuevoGasto()
      setNewVentana(true)

      setTimeout(() => {
        setAnimarVentana(true);
      }, 500);
      
    }
  },[gastoEditar])

  const handleNuevoGasto = () => {
    setNewVentana(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarVentana(true);
    }, 500);
  };

  const guardarGastos = (gasto) => {
    
    if (gasto.id){
      // Actualizar
      const gastosActualizado = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizado)
      setGastoEditar({})
    } else {
      // Nuevo gasto
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }

    setAnimarVentana(false);

    setTimeout(() => {
      setNewVentana(false);
    }, 300);
  };

  const eliminarGasto = id => {
    // console.log('Eliminar gasto', id)
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    // console.log(gastosActualizados)
    setGastos(gastosActualizados)
  }

  // --- //

  return (
    <div className={newVenta ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        valor={valor}
        setValor={setValor}
        isValid={isValid}
        setIsValid={setIsValid}
      />

      {isValid && (
        <>
          <main>
            <ListadoGastos 
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="nuevo gasto icono"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {newVenta && (
        <NewFormPresupuesto
          setNewVentana={setNewVentana}
          animarVentana={animarVentana}
          setAnimarVentana={setAnimarVentana}
          guardarGastos={guardarGastos}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
