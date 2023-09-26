// DEPENDENCIES
const { User } = require('../../DB_connection');

const deleteUsersController = async (user) => {
    await User.destroy({ where: { user } });
    return 'User deleted'
}


module.exports = deleteUsersController;