const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database');

class Town extends Model {};

Town.init({ 
    "name": {
        type: DataTypes.TEXT,
        allowNull: false},
    "postcode": {
        type: DataTypes.TEXT,
        allowNull: false},
    },{
        sequelize,
        tableName: 'town',
    })
    
    module.exports = Town;