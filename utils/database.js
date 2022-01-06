const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        // On dit à sequelize qu'on utilise la version snakeCase plutôt que camelCase
        underscored: true,
        // on modifie le nom des colonnes de date, qui par défaut sont en camelCase
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        //évite de tester si colonne « créé le » dans les tables existe
        timestamps:false,
    }
});


module.exports = sequelize; 