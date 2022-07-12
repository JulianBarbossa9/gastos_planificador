import { useState } from 'react'
import Header from './Components/Header'


function App() {


  const [valor, setValor ] = useState(0)
  const [ isValid, setIsValid ] = useState(false); 

  return (
    <Header 
      valor={valor}
      setValor={setValor}
      isValid={isValid}
      setIsValid={setIsValid}
    />
  )
}

export default App
