import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [data,setData] = useState([])
  const [error,setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const abortControllerRef = useRef(null)

useEffect(() => {
  abortControllerRef.current = new AbortController();
  const fetchData = async () => {
    
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          signal: abortControllerRef.current.signal,
        }
      )
      //throw new error('Soy un error que arruina tu código si me descomentas, wiiiiiii')
      
      const data = await response.json()
      setData(data)

      if (!response.ok) {
        console.log("Error al realizar la solicitud");
        return;
      }
    } catch (error) {
      console.log("Error al realizar la solicitud:", error.message);
      setError("Error al cargar los datos. Por favor, intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  }
  fetchData()

  //return() => {abortControllerRef.current.abort()}  --> Quitar los slashes y comentar los strictmode de main.jsx para que funcione
}, [])

if (isLoading){
  return(
    <p>Cargando datos...</p>
  )
}

if(error !== null){
  return(
    <p>{error}</p>
  )
}
  return (
          <div>
            <h1>Publicaciones:</h1>
            <ul>
              {data.length > 0 ? data.map((post) => {
                return(
                  <div key= {post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                  </div>
                )
              })
                // <li key={post.id} > {post.title}</li>
              : null}
            </ul>
          </div>
  )
}

export default App
