// DEPENDENCIES
const { User } = require('../../DB_connection');

const getLogoutController = async (id) => {
    const found = await User.findOne({
        where: { id }
    });

    if (found) {
        found.access = false;
        await found.save();
        return { access: false };
    } else return 'Error logging out';
}


module.exports = getLogoutController;