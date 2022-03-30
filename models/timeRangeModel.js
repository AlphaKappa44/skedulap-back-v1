const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database');

class Time_range extends Model {};

Time_range.init({ 
    "opening_time": {
        type: DataTypes.TIME,
        allowNull: false},
    "closing_time": {
        type: DataTypes.TIME,
        allowNull: false},
    },{
        sequelize,
        tableName: 'time_range',
    })
    
    module.exports = Time_range;