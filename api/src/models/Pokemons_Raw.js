const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Pokemons_Raw', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { 
        timestamps: false,
        freezeTableName: true
    } );
};