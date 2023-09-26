// DEPENDENCIES
const { Op } = require('sequelize');
const { User } = require('../../DB_connection');

const getLogoutController = async (user) => {

    const found = await User.findOne({
        where: { user }
    });

    if (found) {
        found.access = false;
        await found.save();
        return { access: false };
    }
    else return 'Error logging out';

}


module.exports = getLogoutController;