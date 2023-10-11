// DEPENDENCIES
const { User } = require('../../DB_connection');

const getLogoutController = async (id) => {
    return {
        pokemonsTemp: [],
        pokeball: [],
        pokeballFiltered: [],
        pokedex: [],
        pokedexPage: [],
        pokemonDetail: {},
        pokemonTypes: [],
        pokemonAbilities: [],
        image: '',
        userId: null,
        access: false,
        popup: {
            type: ''
        },
        alert: {
            title: '',
            message: '',
            type: '',
            callback: null
        },
        config: {
            loading: true,
            page: 1,
            level: 0,
            username: '',
            userPicture: '',
            pokeballFilters: {
                order: 'id',
                direction: 'ASC',
                type: '',
                origin: ''
            },
            pokedexFilters: {
                order: 'id',
                direction: 'ASC',
                type: '',
                origin: ''
            },
        }
    };

    // TODO: REMEMBER ME OPTION
    
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