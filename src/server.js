'use strict';

const express = require('express');

const cors = require('cors');

const app = express(); // singleton

const PORT = process.env.PORT;

const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');
const authorRouter = require('./routes/author');
const bookRouter = require('./routes/book');

app.use(cors());

app.use(express.json());

app.use('/food', foodRouter);
app.use('/clothes', clothesRouter);
app.use('/author', authorRouter);
app.use('/book', bookRouter);

module.exports = {
    app,
    start: (PORT) => app.listen(PORT, ()=> {console.log(`Listening on port ${PORT}`)})
};