// DEPENDENCIES
const { Pokemon, Type } = require('../../DB_connection');
const queryBuilder = require('../../utils/queryBuilder');

const pokedexFilterController = async (filters) => {
    const query = queryBuilder(filters, Type);
    return await Pokemon.findAll({ ...query });
}

module.exports = pokedexFilterController;