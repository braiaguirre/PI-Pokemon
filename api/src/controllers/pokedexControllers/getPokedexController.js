// DEPENDENCIES
const { Pokemon, Type } = require('../../DB_connection');
const queryBuilder = require('../../utils/queryBuilder');

const getPokedexController = async (page, filters) => {
    // const min = (page * 12 - 12) > 0 ? (page * 12 - 12) : 0;
    // const max = (page * 12) < pokedex.length ? (page * 12) : pokedex.length - 1;
    // const pokedexPage = pokedex.slice(min, max);

    const query = queryBuilder({ ...filters, page: page });
    const pokedexPage = await Pokemon.findAll({ ...query });

    return {
        pokedexPage,
        page
    };
}

module.exports = getPokedexController;