'use strict';

const { DataTypes } = require('sequelize');
// const { sequelize } = require('.');

const Author = (sequelize) => sequelize.define({

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

module.exports = Author;