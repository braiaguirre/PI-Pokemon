// DEPENDENCIES
const { Op } = require('sequelize');
const { User } = require('../../DB_connection');

const getAccessController = async (accessData) => {
    const { user, email, password } = accessData;
    const found = User.findOne({
        where: { [Op.or]: [{ user }, { email }] }
    });
    return found.password === password ? { access: true } : 'Incorrect user, email or password';
}


module.exports = getAccessController;