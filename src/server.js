'use strict';

const express = require('express');

const cors = require('cors');

const app = express(); // singleton

const PORT = process.env.PORT;

const foodRouter = require('./routes/food');

app.use(cors());

app.use(express.json());

app.use('/food', foodRouter);

module.exports = {
    app,
    start: (PORT) => app.listen(PORT, ()=> {console.log(`Listening on port ${PORT}`)})
};