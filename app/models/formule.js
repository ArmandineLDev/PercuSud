const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../database');

class Formule extends Model {}

Article.init({
    formule: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false


    }

}, {
    tableName: 'article',
    sequelize
});

module.exports = Formule;