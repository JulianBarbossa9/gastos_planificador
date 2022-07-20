import { useState } from "react";
import Header from "./Components/Header";
import { generarId } from "./helpers";
import NewFormPresupuesto from "./Components/NewFormPresupuesto";
import ListadoGastos from "./Components/ListadoGastos";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {

  const [gastos, setGastos] = useState([]);
  
  const [valor, setValor] = useState();
  const [isValid, setIsValid] = useState(false);

  const [newVenta, setNewVentana] = useState(false);
  const [animarVentana, setAnimarVentana] = useState(false);

  const [gastoEditar, setGastoEditar ] = useState({})

  const handleNuevoGasto = () => {
    setNewVentana(true);

    setTimeout(() => {
      setAnimarVentana(true);
    }, 500);
  };

  const guardarGastos = (gasto) => {
    gasto.id = generarId();
    gasto.fecha = Date.now() 
    setGastos([...gastos, gasto]);

    setAnimarVentana(false);

    setTimeout(() => {
      setNewVentana(false);
    }, 300);
  };

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
        />
      )}
    </div>
  );
}

export default App;
