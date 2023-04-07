const express = require('express');
const authorRouter = express.Router();
// const { Author } = require('../models/author');
const AuthorCollection = require('../models/index').Author;

authorRouter.get('/:id', readAuthors);
authorRouter.get('/', readAuthors);
authorRouter.post('/', createAuthor);
authorRouter.put('/:id', updateAuthor);
authorRouter.delete('/:id', deleteAuthor);

async function readAuthors(req, res, next) {
    if (req.params.id) {
        let data = await AuthorCollection.read(req.params.id);
        res.json(data)
    } else {
        let data = await AuthorCollection.read();
        res.json(data)
    }
}

async function createAuthor(req, res, next) {
    try {
        let data = await AuthorCollection.create(req.body);
        res.json(data)
    } catch (error) {
        console.log("ERROR IN CREATE AUTHOR ROUTE: ", error);
    }
}

async function updateAuthor(req, res, next) {

    try {
        let data = await AuthorCollection.update(req.params.id, req.body)
        res.json(req.body)
    } catch (error) {
        console.log("ERROR IN UPDATE AUTHOR ROUTE: ", error);
    }
}

async function deleteAuthor(req, res, next) {
    try {
        let data = await AuthorCollection.delete(req.params.id);
        res.json(data)
    } catch (error) {
        console.log('ERROR IN DELETE AUTHOR ROUTE: ', error);
    }
}

module.exports = authorRouter;