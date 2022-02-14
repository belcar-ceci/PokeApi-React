import React, { useEffect, useState }from "react";

import axios from "axios";

const Landing = () => {

    const [pokemon, setPokemon] = useState([]);

    const getPokemon = async () => {
        let pokemonList = [];
        for(let i = 1; i<= 50; i ++){
            pokemonList.push(await getPokemonData(i))
        }
        console.log(pokemonList);
        setPokemon(pokemonList);

    }
    const getPokemonData = async(id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemon();
    }, )

    return(
        <div>

        </div>
    );
};

export default Landing;