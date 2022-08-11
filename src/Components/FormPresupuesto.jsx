import { useEffect } from "react";
import { useState } from "react";

import Mensaje from "./Mensajes";

const FormPresupuesto = ({ valor, setValor, setIsValid }) => {
  
  const [mensaje, setMensaje] = useState("");
  
  // Validación de Formulario
  
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validando que el valor sea un numero positivo y no tipo str
    if (!valor || valor < 0) {
      setMensaje("No es un presupesto valido");
      return;
    }
    // setMensaje('Es un presupesto valido');
    // console.log("Es un presupesto valido");
    setMensaje("");
    setIsValid(true);
  };

//   useEffect(() => {
//     if(valor > 0){
//         console.log('entree')
//     }
//   },[valor])

  return (
    <>
      <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handleSubmit} className="formulario">
          <div className="campo">
            <label>Definir Presupuesto</label>
            <input
              className="nuevo-presupuesto"
              type="number"
              placeholder="Añade su presupuesto"
              value={valor || ''}
              onChange={(e) => setValor(Number(e.target.value))}
            />
          </div>
        <input 
            type="submit" 
            value="añadir" 
        />
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
      </div>
    </>
  );
};

export default FormPresupuesto;
