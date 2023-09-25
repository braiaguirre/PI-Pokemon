// DEPENDENCIES
const axios = require('axios');
const filterPokemonData = require('../../utils/filterPokemonData');

const URL = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemonsByIdController = async (id) => {
    const { data } = await axios.get(`${URL}${id}`);
    console.log(data);
    const pokemon = filterPokemonData(data);
    return pokemon;
}

module.exports = getPokemonsByIdController;