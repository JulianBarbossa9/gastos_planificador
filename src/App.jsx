import { useState } from "react";
import Header from "./Components/Header";
import NewFormPresupuesto from "./Components/NewFormPresupuesto";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [valor, setValor] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [newVenta, setNewVentana] = useState(false);
  const [animarVentana, setAnimarVentana] = useState(false);
  const [gastos, setGastos] = useState([]);


  const handleNuevoGasto = () => {
    setNewVentana(true);

    setTimeout(() => {
      setAnimarVentana(true);
    }, 500);
  };

  const guardarGastos = (gasto) => {
    setGastos([...gastos,gasto]);
  };

  return (
    <div>
      <Header
        valor={valor}
        setValor={setValor}
        isValid={isValid}
        setIsValid={setIsValid}
      />

      {isValid && (
        <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="nuevo gasto icono"
            onClick={handleNuevoGasto}
          />
        </div>
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
