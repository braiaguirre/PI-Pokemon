// DEPENDENCIES
const axios = require('axios');
const { Ability } = require('../../DB_connection');

const URL = 'https://pokeapi.co/api/v2/ability/?limit=-1';

const getAbilitiesController = async () => {
    const abilities = [];
    // CHECKING NEXT PAGE
    let current = URL;
    while (current) {
        const { data } = await axios.get(current);
        abilities.push(...data.results);
        current = data.next;
    };
    abilities.forEach(async ability => {
        await Ability.findOrCreate({
            where: { name: ability.name }
        });
    });
    return await Ability.findAll();
}


module.exports = getAbilitiesController;