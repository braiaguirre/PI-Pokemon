// DEPENDENCIES
const { Pokemon, Type } = require('../../DB_connection');

const pokedexFilterController = async (filtersData) => {
    const { order, direction, type } = filtersData;
    let query = {};
    if (type) query = { ...query, include: [{ model: Type, where: { name: type } }] };
    if (order && direction) query = { ...query, order: [[ order, direction ]] };
    return await Pokemon.findAll({ ...query });
}

module.exports = pokedexFilterController;