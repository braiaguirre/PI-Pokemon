// DEPENDENCIES
const { User } = require('../../DB_connection');

const deleteUsersController = async (user) => {
    // GETS USER AND POKEDEX
    const userDb = await User.findOne({ where: { user } });
    const userDbPokedex = await userDb.getPokedex();
    // DESTROY USER AND POKEDEX
    userDb.destroy();
    userDbPokedex.destroy();
    return 'User deleted';
}


module.exports = deleteUsersController;