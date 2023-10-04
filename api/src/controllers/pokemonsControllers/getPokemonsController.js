// DEPENDENCIES
const axios = require('axios');
const filterPokemonData = require('../../utils/filterPokemonData');
const { Pokemon, Type } = require('../../DB_connection');

const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=500';

const getPokemonsController = async () => {
    let pokemons = await Pokemon.findAll();
    if (!pokemons.length) {
        const { data } = await axios.get(URL);
        const promises = data.results.map(pokemon => axios.get(pokemon.url));
        pokemons = await Promise.all(promises);
        pokemons = pokemons.map(pokemon => filterPokemonData(pokemon.data));
        pokemons.forEach(async pokemon => {
            const [pokemonDb] = await Pokemon.findOrCreate({ 
                where: { id: pokemon.id },
                defaults: { ...pokemon }
            });
            pokemon.types.forEach(async type => {
                const typeDb = await Type.findOne({ where: { name: type } });
                await pokemonDb.addType(typeDb);
            });
        })
    }
    return {
        pokedex: pokemons,
        loading: false
    };
}

module.exports = getPokemonsController;