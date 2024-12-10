function DishCard({ name, description,  price}){
    return <>
    <h3>{name}</h3>
    <p>{description}</p>
    <span>{price}</span>
    </>
}

export default DishCard