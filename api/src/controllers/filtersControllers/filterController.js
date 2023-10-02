// DEPENDENCIES
const { Pokemon, User } = require('../../DB_connection');

const filterController = async (filtersData) => {
    const { order, type } = filtersData;
    console.log(order, type);
}


module.exports = filterController;