// DEPENDENCIES
const axios = require('axios');
const filterPokemonData = require('../../utils/filterPokemonData');
const { Pokemon } = require('../../DB_connection');

const URL = 'https://pokeapi.co/api/v2/pokemon';

const getPokemonsByIdController = async (id) => {
    const pokemonDb = await Pokemon.findOne({ where: { id } });
    if (!pokemonDb) {
        const { data } = await axios.get(`${URL}/${id}`);
        const pokemonApi = filterPokemonData(data);
        return pokemonApi;
    }
    return pokemonDb;
}

module.exports = getPokemonsByIdController;