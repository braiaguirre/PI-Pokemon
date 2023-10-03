// DEPENDENCIES
const axios = require('axios');
const filterPokemonData = require('../../utils/filterPokemonData');
const { Pokemon } = require('../../DB_connection');

const getPokedexController = async (page) => {

    let pokemons = await Pokemon.findAll({
        order: ['id'],
        offset: page * 12 - 12,
        limit: 12
    });

    return {
        pokemons,
        page
    };
}

module.exports = getPokedexController;