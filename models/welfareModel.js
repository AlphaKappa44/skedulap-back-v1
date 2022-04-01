const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database');

class Welfare extends Model {};

Welfare.init({ 
    "type_support": {
        type: DataTypes.TEXT,
        allowNull: false},

    },{
        sequelize,
        tableName: 'support',
    })
    
    module.exports = Welfare;