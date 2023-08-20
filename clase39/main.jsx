// const root = document.getElementById('root')

// const p = document.createElement('p')

// p.textContent = "Hello, mates :)"

// root.appendChild(p)

const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement)

const MyComponent = () =>{
   const number1 = 10
   const number2= 18
   const handleMouseEnter = () => console.log('ESTO ES BAKEEEEEEE')
   return(
    <>
        <h3 style = {{
            color: "red",
            backgroundColor:"black",
            border: '10px solid red'
        }} onMouseEnter= {handleMouseEnter}>El resultado de la suma de ambos números es:</h3>
        <p>{number1 + number2}</p>
    </>
   )
}

const Button = (props) => {
    //const [count, setCount] = React.useState(0)

    const checkNumber= props.result >= 10
    return (
        <>
            {checkNumber ? <p style = {{color:'blue'}}> Vamo, taiereeeeee 🍝</p> : <p style = {{color:'lightskyblue', backgroundColor:'black'}}> Vamo, Beeeelgranooooo 🏴‍☠️</p> }
            <button onClick =  {
             () =>{
                props.addOne(props.count + 1)
             }   
            }type = 'button' disabled = {props.disabled}> {props.message} </button>
            <p> El número actual es: {props.result} </p>
        </>
    )

}

const ConditionalText = () =>{
    const onClass = false
    return(
        <>
        {
            onClass ? <p> Hay clase 😬 </p> : <button> Día libre mañanaaaaaaa(A lo Ancelotti xdxdxd) </button>
            //Si no se tiene qué renderizar, se podría poner como onClass ? <p> Hay clase 😬 </p> : null
        }
        </>
    )
}

const App = () =>{
    const [count, setCount] = React.useState(0)
    return(
        <>
            <Button message = 'Estudiooooooon' disabled = {false} addOne = {setCount} result= {count} count={count}/>
            <MyComponent />
            <ConditionalText/>
        </>
    )
    
}

root.render(
<App/>
    )
