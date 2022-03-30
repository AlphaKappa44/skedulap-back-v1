const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database');

class Structure extends Model {};

Structure.init({ 
    "type_structure": {
        type: DataTypes.TEXT,
        allowNull: false},

    },{
        sequelize,
        tableName: 'structure',
    })
    
    module.exports = Structure;