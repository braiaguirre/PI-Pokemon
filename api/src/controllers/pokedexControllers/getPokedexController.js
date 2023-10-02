// DEPENDENCIES
const axios = require('axios');
const filterPokemonData = require('../../utils/filterPokemonData');
const { Pokemon, Pokemons_Raw } = require('../../DB_connection');

const getPokemonsByIdController = async (page) => {

    let pokemonsRaw = await Pokemons_Raw.findAll({
        order: ['id'],
        offset: page * 12 - 12,
        limit: 12
    });
    pokemonsRaw = pokemonsRaw.map(pokemon => axios.get(pokemon.url));
    
    let pokemons = await Promise.all(pokemonsRaw);
    pokemons = pokemons.map(pokemon => filterPokemonData(pokemon.data));
    
    pokemons.forEach(async pokemon => {
        await Pokemon.findOrCreate({ 
            where: { id: pokemon.id },
            defaults: { ...pokemon }
        });
    });
    
    return {
        pokemons,
        page
    };
}

module.exports = getPokemonsByIdController;