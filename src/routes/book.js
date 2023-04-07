const express = require('express');
const bookRouter = express.Router();
const BookCollection = require('../models/index').Book;

bookRouter.get('/:id', readBook);
bookRouter.get('/', readBook);
bookRouter.post('/', createBook);
bookRouter.put('/:id', updateBook);
bookRouter.delete('/:id', deleteBook);

async function readBook(req, res, next) {
    if (req.params.id) {
        let data = await BookCollection.read(req.params.id);
        res.json(data)
    } else {
        let data = await BookCollection.read();
        res.json(data)
    }
}

async function createBook(req, res, next) {
    try {
        let data = await BookCollection.create(req.body);
        res.json(data)
    } catch (error) {
        console.log("ERROR IN CREATE Book ROUTE: ", error);
    }
}

async function updateBook(req, res, next) {

    try {
        let data = await BookCollection.update(req.params.id, req.body)
        res.json(req.body)
    } catch (error) {
        console.log("ERROR IN UPDATE Book ROUTE: ", error);
    }
}

async function deleteBook(req, res, next) {
    try {
        let data = await BookCollection.delete(req.params.id);
        res.json(data)
    } catch (error) {
        console.log('ERROR IN DELETE Book ROUTE: ', error);
    }
}

module.exports = bookRouter;