require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
const modelPokemon = require('./models/Pokemon');
const modelPokemonType = require('./models/PokemonType');

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/pokemon`,
   { logging: false, native: false }
);

modelPokemon(sequelize);
modelPokemonType(sequelize);

const { Pokemon, PokemonType } = sequelize.models;
Pokemon.belongsToMany(PokemonType, {through: 'pokemon_types'});
PokemonType.belongsToMany(Pokemon, {through: 'pokemon_types'});

module.exports = {
   ...sequelize.models,
   conn: sequelize,
};
