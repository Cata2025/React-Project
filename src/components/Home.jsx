import Header from "./Header";
import DishCard from "./DishCard";

const dishes = [
    {
      id:1,
      name:'Tallarine',
      description:'Este es el plato 1',
      price:10
    },
    {
      id:2,
      name:'plato 2',
      description:'Este es el plato 2',
      price:20
    },
    {
      id:3,
      name:'plato 3',
      description:'Este es el plato 3',
      price:15
    }
  ]

function Home (){
    return <><Header/>
      <DishCard name={dishes[0].name} description={dishes[0].description} price={dishes[0].price}/>
      <DishCard name={dishes[1].name} description={dishes[1].description} price={dishes[1].price}/>
      <DishCard name={dishes[2].name} description={dishes[2].description} price={dishes[2].price}/>
    </>
}


export default Home