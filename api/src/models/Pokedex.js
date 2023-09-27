const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Pokedex', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        pokemons: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false
        }
    }, { timestamps: false} );
};