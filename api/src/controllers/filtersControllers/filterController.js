const filterController = (prop, filter, pokemons) => 
    pokemons.filter(pokemon => pokemon[prop] === filter);

module.exports = filterController;