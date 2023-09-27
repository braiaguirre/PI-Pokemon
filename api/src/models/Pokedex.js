const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Pokedex', {
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        pokemons: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false
        }
    }, { timestamps: false} );
};