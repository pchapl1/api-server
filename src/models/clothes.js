
'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

// here is our connection
const SQL_URL = process.env.SQL_URL || "sqlite:memory:";

// provide your connection string
// const sequelize = new Sequelize(SQL_URL);
const sequelize = new Sequelize("sqlite::memory:")


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