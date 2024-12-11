function Person({ name, surname, age }){
    return <>
        <span>Pizzeria Italia Bienvenido {name + " "+ surname}</span>
        <span> Tienes la edad de {age}</span>
        <br></br>
    </>
}

export default Person