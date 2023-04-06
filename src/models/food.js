
'use strict';

const {sequelize, DataTypes} = require('./index');

const Food = sequelize.define("Food", {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = {
    sequelize,
    Food
}