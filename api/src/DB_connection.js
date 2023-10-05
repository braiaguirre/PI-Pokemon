// DEPENDENCIES
require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

// MODELS
const modelPokemon = require('./models/Pokemon');
const modelType = require('./models/Type');
const modelAbility = require('./models/Ability');
const modelUser = require('./models/User');
const modelPokemons_Raw = require('./models/Pokemons_Raw');

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/pokemon`,
   { logging: false, native: false }
);

modelPokemon(sequelize);
modelType(sequelize);
modelAbility(sequelize);
modelUser(sequelize);
modelPokemons_Raw(sequelize);

const { 
   Pokemon, 
   Type,
   Ability, 
   User,
} = sequelize.models;

Pokemon.belongsToMany(Type, {through: 'Pokemon_Types'});
Type.belongsToMany(Pokemon, {through: 'Pokemon_Types'});
Pokemon.belongsToMany(Ability, {through: 'Pokemon_Abilities'});
Ability.belongsToMany(Pokemon, {through: 'Pokemon_Abilities'});
User.belongsToMany(Pokemon, {through: 'User_Pokemon'});
Pokemon.belongsToMany(User, {through: 'User_Pokemon'});

module.exports = {
   ...sequelize.models,
   conn: sequelize,
};
