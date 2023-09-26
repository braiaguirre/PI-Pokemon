// DEPENDENCIES
const axios = require('axios');
const filterPokemonData = require('../../utils/filterPokemonData');
const { Pokemon } = require('../../DB_connection');

const URL = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemonByNameController = async (name) => {
    const pokemonDb = await Pokemon.findOne({ where: { name } });
    if (!pokemonDb) {
        const { data } = await axios.get(`${URL}${name}`);
        console.log(data);
        const pokemonApi = filterPokemonData(data);
        return pokemonApi;
    }
    return pokemonDb;
}

module.exports = getPokemonByNameController;