// DEPENDENCIES
const { User } = require('../../DB_connection');

const getLogoutController = async (id) => {
    return {
        userId: null,
        access: false,
        pokeball: [],
        pokeballFiltered: [],
        pokedex: [],
        pokedexPage: []
    };

    // TODO: IMPLEMENT REMEMBER ME OPTION
    
    const found = await User.findOne({
        where: { id }
    });

    if (found) {
        found.access = false;
        await found.save();
        return false;
    } else throw new Error('Error logging out');
}


module.exports = getLogoutController;