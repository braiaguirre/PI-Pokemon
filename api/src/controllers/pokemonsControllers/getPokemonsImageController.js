// DEPENDENCIES
const axios = require('axios');
const { Pokemon } = require('../../DB_connection');

const URL = 'https://pokeapi.co/api/v2/pokemon';

const getPokemonsImageController = async (id) => {
    const pokemonDb = await Pokemon.findOne({ where: { id } });
    if (!pokemonDb) {
        const { data } = await axios.get(`${URL}/${id}`);
        const image = data.sprites.other.home.front_default;
        const imageBack = data.sprites.other['official-artwork'].front_default;
        return image ? image : imageBack;
    }
    return pokemonDb.image;
}

module.exports = getPokemonsImageController;