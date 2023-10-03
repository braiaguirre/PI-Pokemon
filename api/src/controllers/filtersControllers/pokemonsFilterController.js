// DEPENDENCIES
const { User, Type } = require('../../DB_connection');

const pokemonsFilterController = async (filtersData) => {
    const { order, direction, type, userId } = filtersData;
    const userDb = await User.findOne({ where: { id: userId } });
    let query = {};
    if (type) query = { ...query, include: [{ model: Type, where: { name: type } }] };
    if (order && direction) query = { ...query, order: [[ order, direction ]] };
    return await userDb.getPokemons({ ...query });
}


module.exports = pokemonsFilterController;