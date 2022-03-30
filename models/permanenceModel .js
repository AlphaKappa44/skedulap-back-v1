const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database');

class Permanence extends Model {};

Permanence.init({ 
    "permanence_name": {
        type: DataTypes.TEXT,
        allowNull: false},
    // "id_structure": {
    //     type: DataTypes.SERIAL,
    //     allowNull: false},
    // "id_time_range": {
    //     type: DataTypes.SERIAL,
    //     allowNull: false},
    },{
        sequelize,
        tableName: 'permanence',
    })
    
    module.exports = Permanence;