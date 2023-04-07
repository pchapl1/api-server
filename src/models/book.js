'use strict';

const { DataTypes } = require('sequelize');

const Book = (sequelize) => sequelize.define("Book", {

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    length: {
        type: DataTypes.STRING,
        allowNull: false
    },
    yearPublished: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

module.exports = Book;