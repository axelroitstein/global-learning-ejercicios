
import styles from './app.module.css'
import { useState } from 'react'

const Button = () => {
  return(
    <>
    <button onClick = {()=>{
    }}type='button' className={styles.button}>Soy un botón que no hace nada y necesita cambiar sus colores, jiji</button>
    </>
  )
}

const ShowDiffElements = () => {
  const [count, setCount] = useState(0)
  return(
    <>
      <button onClick = {() =>
        setCount(count + 1)
      } type = 'button' className={styles.addButton}> Clickeame para sumar de a 1</button>

      <button onClick = {() =>
        setCount(count + 10)
      } type = 'button' className={styles.addButton}> Clickeame para sumar de a 10 😯</button>

      <button onClick = {() =>
        setCount(count - 1)
      } type = 'button' className={styles.substractButton}> Clickeame para restar de a 1 </button>

       <button onClick = {() =>
        setCount(count - 10)
      } type = 'button' className={styles.substractButton}> Clickeame para restar de a 10 😬</button>

      <p> El número es: {count}</p>

      {count === 10 ? <iframe width="560" height="315" src="https://www.youtube.com/embed/xvFZjo5PgG0?autoplay=1&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> : count === 42 ? <img src = 'https://statics.memondo.com/p/s1/hess/2021/09/HES_81286_fc6c3fcb1cda4976821c374bb0019006_cine_de_nada.jpg?cb=7707579'></img> : null}
    </>
  )
}

const MessiVsTrainingBib = () => {
  const messiWithTrainingBib = true
  return(
    messiWithTrainingBib ? <img height = '700px' alt='Messi tá sufriendo' src = 'https://statics.memondo.com/p/99/mmds/2013/02/MMD_88391_82575a9a5cf54264b09799ae841da964_futbol_messi_sigue_sin_poder_contra_el_peto.jpg?cb=9312162'></img> : <img width='500px' height='500px' alt = 'Messi tá felí' src = 'https://pbs.twimg.com/media/FoBzOlCagAA_tTZ.jpg:large'></img> 
  )
}

const SumComponent = () =>{
  const number1 = 10
  const number2= 18
  const handleMouseEnter = () => console.log('ESTO ES BAKEEEEEEE')
  return(
   <>
       <h3 className={styles.result} onMouseEnter= {handleMouseEnter}>El resultado de la suma de ambos números es:</h3>
       <p className={styles.resultNumber}>{number1 + number2}</p>
   </>
  )
}

function App() {

  return (
    <>
    <p>Esto es un parrafo que pronto será utilizado, jujuju</p>
    <Button />
    <ShowDiffElements/>
    <MessiVsTrainingBib/>
    <SumComponent/>
    </>
  )
}

export default App
