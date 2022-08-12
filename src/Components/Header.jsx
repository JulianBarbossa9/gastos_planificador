import { useState } from "react";
import FormPresupuesto from "./FormPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({gastos, valor, setValor, isValid, setIsValid, setGastos }) => {
  return (
    <>
      <header>
        <h1>Planificador de Gastos</h1>

        {isValid ? (
          <ControlPresupuesto 
            gastos={gastos}
            setGastos={setGastos}
            valor={valor}
            setValor={setValor}
            setIsValid={setIsValid}
          />
        ) : (
          <FormPresupuesto
            valor={valor}
            setValor={setValor}
            setIsValid={setIsValid}
          />
        )}
      </header>
    </>
  );
};

export default Header;
