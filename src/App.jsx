import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Filtros from "./Components/Filtros";
import { generarId } from "./helpers";
import NewFormPresupuesto from "./Components/NewFormPresupuesto";
import ListadoGastos from "./Components/ListadoGastos";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import { object } from "prop-types";

function App() {

  const [gastos, setGastos] = useState([
   ...(JSON.parse(localStorage.getItem('gastos')) ?? []),
  ]);
  
  const [valor, setValor] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValid, setIsValid] = useState(false);

  const [newVenta, setNewVentana] = useState(false);
  const [animarVentana, setAnimarVentana] = useState(false);

  const [gastoEditar, setGastoEditar ] = useState({}); //Objeto

  const [filtro, setFiltro ] = useState('')
  const [gastosFiltrados, setGastosFiltrados ] = useState([])
  
  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      // handleNuevoGasto()
      setNewVentana(true)

      setTimeout(() => {
        setAnimarVentana(true);
      }, 500);
      
    }
  },[gastoEditar])

  //Local Storage
  useEffect(() => {
    localStorage.setItem('presupuesto', valor ?? 0)
  },[valor])

  useEffect(()=>{
    localStorage.setItem('gastos',JSON.stringify(gastos) ?? [])
  },[gastos])

  useEffect(()=> {
    if (filtro){
      // console.log('se realizo el filtro', filtro)
      //Filtrar gastos por categoria
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltrados)

    }
  },[filtro])

  useEffect(()=>{
    const presupuestoLocalStorage = Number(localStorage.getItem('presupuesto')) ?? 0
    if (presupuestoLocalStorage > 0){
      setIsValid(true)
    }
  },[])



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
        setGastos={setGastos}
        valor={valor}
        setValor={setValor}
        isValid={isValid}
        setIsValid={setIsValid}
      />

      {isValid && (
        <>
          <main>
            <Filtros 
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos 
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
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
