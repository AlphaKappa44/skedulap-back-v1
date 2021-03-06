// "id_user" SERIAL PRIMARY KEY,
// "email" VARCHAR(42) NOT NULL,
// "password" VARCHAR(42) NOT NULL,
// "first_name" VARCHAR(42) NOT NULL,
// "last_name" VARCHAR(42) NOT NULL,
// "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
// "updated_at" TIMESTAMPTZ

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class User extends Model {};

User.init({ 

    first_name: {
        type: DataTypes.TEXT,
        allowNull: false},
    last_name: {
        type: DataTypes.TEXT,
        allowNull: false},

    email: {
        type: DataTypes.TEXT,
        allowNull: false},

    password: {
        type: DataTypes.TEXT,
        allowNull: false},
    key_password: DataTypes.TEXT
},{
    sequelize,
    tableName: 'user',
})

module.exports = User; 