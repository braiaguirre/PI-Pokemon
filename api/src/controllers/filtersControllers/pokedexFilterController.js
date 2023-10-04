// DEPENDENCIES
const { Pokemon, Type } = require('../../DB_connection');
const queryBuilder = require('../../utils/queryBuilder');

const pokedexFilterController = async (filtersData) => {
    const query = queryBuilder(filtersData);
    return await Pokemon.findAll({ ...query });
}

module.exports = pokedexFilterController;