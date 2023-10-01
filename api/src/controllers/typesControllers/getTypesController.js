// DEPENDENCIES
const axios = require('axios');
const { PokemonType } = require('../../DB_connection');

const URL = 'https://pokeapi.co/api/v2/type/';

const getTypesController = async () => {
    const types = [];
    // CHECKING NEXT PAGE
    let current = URL;
    while (current) {
        const { data } = await axios.get(current);
        types.push(...data.results);
        current = data.next;
    }
    types.forEach(async type => {
        await PokemonType.findOrCreate({
            where: { name: type.name },
            defaults: { ...userData, access: false },
        });
        
    });
    // TODO: ESTOY CON ESTO
    return types.map(type => type.name);
}


module.exports = getTypesController;