// DEPENDENCIES
require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

// MODELS
const modelPokemon = require('./models/Pokemon');
const modelPokemonType = require('./models/PokemonType');
const modelUser = require('./models/User');
const modelPokedex = require('./models/Pokedex');
const modelPokemons_Raw = require('./models/Pokemons_Raw');

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/pokemon`,
   { logging: false, native: false }
);

modelPokemon(sequelize);
modelPokemonType(sequelize);
modelUser(sequelize);
modelPokedex(sequelize);
modelPokemons_Raw(sequelize);

const { 
   Pokemon, 
   PokemonType, 
   User,
   Pokedex
} = sequelize.models;

Pokemon.belongsToMany(PokemonType, {through: 'pokemon_types'});
PokemonType.belongsToMany(Pokemon, {through: 'pokemon_types'});
User.hasOne(Pokedex);
Pokemon.belongsToMany(Pokedex, {through: 'pokemon_pokedex'});
Pokedex.belongsToMany(Pokemon, {through: 'pokemon_pokedex'});

module.exports = {
   ...sequelize.models,
   conn: sequelize,
};
