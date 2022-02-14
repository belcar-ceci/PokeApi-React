import React, { useEffect, useState } from 'react';
import Card from './components/Card';


//import Landing from './pages/Landing';

const App = () => {

  const[allPokemons, setAllPokemons] = useState([])
   const [loading, setLoading] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loading)
    const data = await res.json()

    setLoading(data.next)

    function createPokemon(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        
      
      })
    }
    createPokemon(data.results)
  await console.log(allPokemons)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])

  return (
    <div className="app-container"> 
    
    <div className="center-items">
      <h1 className="title">Pokemon API React</h1>
     <button 
     className="loading-pokemon" 
     onClick={() => getAllPokemons()}>Load more
     </button>
    </div>

      <div className="pokemon-container">
        <div className="all-container">
       
        {allPokemons.map( (pokemonIndex, index) => 
            <Card
            key={index}
            id={pokemonIndex.id}
            image={pokemonIndex.sprites.other.dream_world.front_default}
            name={pokemonIndex.name}
            type={pokemonIndex.types[0].type.name}
          />)}
          
        </div>
        
      </div>

    </div>
  );
}

export default App;
