
'use strict';


const {sequelize, DataTypes} = require('./index');

const Clothes = sequelize.define("Clothes", {

    title: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = {
    sequelize,
    Clothes
}