import { useState, useEffect, useRef } from 'react'
import './App.css'


function Message (){
  useEffect(() =>{

    // let timer = 0
    // const exampleInterval setInterval(() => {
    //   console.log(`El timer está en ${timer++} segundos`)
    // }, 1000);
    // return() => clearInterval(exampleInterval)

    // const handleKeyDown = (e) => console.log(`Presionaste la tecla ${e.key}`)
    // window.addEventListener('keydown', handleKeyDown)
    // return () => window.removeEventListener('keydown',handleKeyDown)
    console.log('Componente de la T')
    return() => console.log('Se desmontó el componente :/')
  }, [])
  return <h1> Nasheeeeeee </h1>
}


function App() {
  const [message, setMessage] = useState('Este usuario es hincha de:')
  const changeMessage = () =>{
    setMessage(('Beeeelgrano'))
   //setMessage((prev) => prev + ' y Beeeelgrano')
    if (message === 'Beeeelgrano'){
      setMessage('Taaaaiere')
    }
  }
  const inputRef = useRef(null)
  // const [data, setData] = useState([])

  useEffect(() => {
    if(message !== 'Este usuario es hincha de:'){console.log('Se cambió el mensaje a: ' + message)}
  }, [message]) //En el array de dependencias se indica que se lance el efecto cuando cambió algún estado, no cuando se realiza cierta acción. 

  useEffect(() =>{
    console.log(inputRef.current.value)
  })

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://pokeapi.co/api/v2/pokemon/158');
  //       const data = await response.json();
  //       console.log(data);
  //       setData(() => data)
  //     } catch (error) {
  //       console.log()
  //     }
  //   }
  //   fetchData()
  // }, [])


  return (
    <>
    <h1>{message}</h1>
    <button onClick={changeMessage}>Cambiar a mensaje pirata </button>
    <button onClick={() => setMessage('Tiiituto, qliau')}>Cambiar a mensaje de la gloria de Alta Córdoba</button>
    <button onClick={() => setMessage('De Taaaaaiere, che!')}>Cambiar a mensaje de la T</button>
    <input type = 'text' ref={inputRef}/>
    {message === 'De Taaaaaiere, che!' ? <Message/> : null}
    </>
  )
}

export default App
