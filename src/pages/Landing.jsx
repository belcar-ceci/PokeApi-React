import React, { useEffect, useState }from "react";
import Card from "../components/Card";
import axios from "axios";

const Landing = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPokemon = async () => {
        let pokemonList = [];
        for(let i = 1; i<= 50; i ++){
            pokemonList.push(await getPokemonData(i))
        }
        console.log(pokemonList);
        setPokemon(pokemonList);
        setLoading(false);

    }
    const getPokemonData = async(id) => {
        
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log();
        return res;
    }

    useEffect(() => {
        getPokemon();
    }, )

    const renderPokemon = () => {
        if (loading) {
          return <p>Loading...</p>;
        }
    
    return pokemon.map(({ e }) => (
        <Card
        key={e.data.name}
        
        />
    )); 
    
    };

    return (
        <div>
          <Card />
          <div className="grid-container">{renderPokemon()}</div>
        </div>
      );
   
}
export default Landing;