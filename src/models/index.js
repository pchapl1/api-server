
'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');


//import model functions
const createBook = require('./book');
const createAuthor = require('./author');

//import Collection object
const Collection = require('../lib/Collection');

const sequelize = new Sequelize("sqlite:memory:")
// pass model functions sequelize 
const BookModel = createBook(sequelize);
const AuthorModel = createAuthor(sequelize);

// set up foreign keys
AuthorModel.hasMany(BookModel, {foreignKey: 'authorId', sourceKey: 'id'});
BookModel.belongsTo(AuthorModel, {foreignKey: 'authorId', targetKey: 'id'});


module.exports = {
    sequelize, 
    DataTypes,
    Book: new Collection(BookModel),
    Author: new Collection(AuthorModel)

};