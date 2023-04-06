
'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("sqlite:memory:")

const createBook = require('./book');
const createAuthor = require('./author');
const Collection = require('../lib/collection');

const BookModel = createBook(sequelize);
const AuthorModel = createAuthor(sequelize);

// [] TODO: create foreign key relationships for bookmodel and authormodel

module.exports = {
    sequelize, 
    DataTypes,
    Book: new Collection(BookModel),
    Author: new Collection(AuthorModel)
};