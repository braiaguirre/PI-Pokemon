// DEPENDENCIES
const axios = require('axios');
const filterPokemonData = require('../../utils/filterPokemonData');
const { Pokemons_Raw } = require('../../DB_connection');

const URL = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemonsController = async () => {
    let pokemonsRaw = [];
    
    // CHECKING NEXT PAGE
    let current = URL;
    while (current) {
        const { data } = await axios.get(current);
        pokemonsRaw.push(...data.results);
        current = data.next;
    };

    return pokemonsRaw.map((pokemon, i) => {
        const pokemonRaw = {
            id: i + 1,
            ...pokemon
        };
        Pokemons_Raw.findOrCreate({
            where: { id: pokemonRaw.id },
            defaults: { ...pokemonRaw }
        });
        return pokemonRaw;
    });

}

module.exports = getPokemonsController;