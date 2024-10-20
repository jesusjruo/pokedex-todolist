import axios from "axios";
import { useState } from "react";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState({
        name: '',
        image: '',
        type: '',
        weight: 0
    });

    const handleSubmit = e => {
        e.preventDefault();
        const pokeSearchForm = new FormData(e.target);

        const pokemonName = pokeSearchForm.get('pokemon').toLowerCase();

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            console.log(response.data.name , response.data.sprites.front_default);

            setPokemon({
                name: response.data.name,
                image: response.data.sprites.front_default,
                type: response.data.types[0].type.name,
                weight: response.data.weight
            })
        }).catch(error => {
            setPokemon({
                name: 'Pokemon not found',
                image: '#',
                type: 'Unknown',
                weight: 0
            })
        });
        e.target.reset();
    }
    return (
        <>
            <h1>Pokedex</h1>
            <form onSubmit={handleSubmit}>
                Pokemon: <input
                    name='pokemon'
                />
                <button type='submit'>Search</button>
            </form>

            <h2>{(pokemon.name).toUpperCase()}</h2>
            {pokemon.name === 'Pokemon not found' || pokemon.name === '' ? null : <img width="200" height="200" src={pokemon.image} alt={pokemon.name}/>}<br/>
            Type: {pokemon.name === 'Pokemon not found' ? 'Unknown' : pokemon.type} <br/>
            Weight: {pokemon.name === 'Pokemon not found' || pokemon.name === '' ? 'NaN' : pokemon.weight} pounds
        </>
    )
}

export default Pokemon