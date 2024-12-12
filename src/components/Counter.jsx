import { useEffect, useState } from "react"

function Counter(){

    const [count, setCount] = useState(0)
    const [increment, setIncrement] = useState(1)

    const addOne = ()=>{
        setCount(count+increment)
    }

    const MinusOne = ()=>{
        setCount(count-increment)
    }



    const handleInputChange = (event)=>{
        setIncrement(Number(event.target.value))
    }
    


    return <><h1> esto es un contador {count}</h1>

    <button onClick={addOne}>Plus one</button>
    <button onClick={MinusOne}>Minus one</button>

    <h3>this is the increment {increment}</h3>
    <input 
        type="number" 
        value={increment} 
        onChange={handleInputChange} 
        placeholder="Escribe aquí"
      />

    </>
}


export default Counter