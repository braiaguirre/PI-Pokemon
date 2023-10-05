// DEPENDENCIES
const axios = require('axios');
const filterPokemonData = require('../../utils/filterPokemonData');
const { Pokemon, Type, Ability } = require('../../DB_connection');

const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=500';

const getPokemonsController = async () => {
    let pokemons = await Pokemon.findAll();
    let types = await Type.findAll();
    let abilities = await Ability.findAll();
    if (!pokemons.length || !types.length || !abilities.length) {
        const { data } = await axios.get(URL);
        const promises = data.results.map(pokemon => axios.get(pokemon.url));
        pokemons = await Promise.all(promises);
        pokemons = pokemons.map(pokemon => filterPokemonData(pokemon.data));
        pokemons.forEach(async pokemon => {
            const [pokemonDb] = await Pokemon.findOrCreate({ 
                where: { id: pokemon.id },
                defaults: { ...pokemon }
            });
            pokemon.types.forEach(async type => {
                const typeDb = await Type.findOne({ where: { name: type } });
                await pokemonDb.addType(typeDb);
            });
            pokemon.abilities.forEach(async ability => {
                const abilityDb = await Ability.findOne({ where: { name: ability } });
                await pokemonDb.addAbility(abilityDb);
            });
        })
    }
    return {
        pokedex: pokemons,
        loading: false
    };
}

module.exports = getPokemonsController;