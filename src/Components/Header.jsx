import { useState } from "react";
import FormPresupuesto from "./FormPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({ valor, setValor, isValid, setIsValid }) => {
  return (
    <>
      <header>
        <h1>Planificador de Gastos</h1>

        {isValid ? (
          <ControlPresupuesto 
            valor={valor}
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
