// DEPENDENCIES
const { User } = require('../../DB_connection');

const deleteUsersController = async (user) => {
    const userDb = await User.findOne({ where: { user } });
    userDb.destroy();
    return 'User deleted';
}


module.exports = deleteUsersController;