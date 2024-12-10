function Person({ name, surname, age }){
    return <>
        <span>Pizzeria italia Bienvenido {name + " "+ surname}</span>
        <span> Tienes la edad de {age}</span>
        <br></br>
    </>
}

export default Person