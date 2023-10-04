// DEPENDENCIES
const { Pokemon, Type } = require('../../DB_connection');
const queryBuilder = require('../../utils/queryBuilder');

const getPokedexController = async (page, filters) => {
    const query = queryBuilder({ ...filters, page: page }, Type);
    const pokedexPage = await Pokemon.findAll({ ...query });
    return { pokedexPage, page };
}

module.exports = getPokedexController;