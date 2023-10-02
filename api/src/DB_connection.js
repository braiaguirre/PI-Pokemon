// DEPENDENCIES
require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

// MODELS
const modelPokemon = require('./models/Pokemon');
const modelType = require('./models/Type');
const modelUser = require('./models/User');
const modelPokemons_Raw = require('./models/Pokemons_Raw');

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/pokemon`,
   { logging: false, native: false }
);

modelPokemon(sequelize);
modelType(sequelize);
modelUser(sequelize);
modelPokemons_Raw(sequelize);

const { 
   Pokemon, 
   Type, 
   User,
} = sequelize.models;

Pokemon.belongsToMany(Type, {through: 'Pokemon_Types'});
Type.belongsToMany(Pokemon, {through: 'Pokemon_Types'});
User.belongsToMany(Pokemon, {through: 'User_Pokemon'});
Pokemon.belongsToMany(User, {through: 'User_Pokemon'});

module.exports = {
   ...sequelize.models,
   conn: sequelize,
};
