// DEPENDENCIES
const axios = require('axios');
const filterPokemonData = require('../../utils/filterPokemonData');
const { Pokemon, Type } = require('../../DB_connection');

const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=100';

const getPokemonsController = async () => {
    const found = await Pokemon.findAll();
    if (found.length) return found;

    const { data } = await axios.get(URL);
    const promises = data.results.map(pokemon => axios.get(pokemon.url));
    let pokemons = await Promise.all(promises);
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
    return pokemons;
}

module.exports = getPokemonsController;