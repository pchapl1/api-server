'use strict';

const express = require('express');

const cors = require('cors');
// const logger = require('./middleware/logger');
// const validator = require('./middleware/validator');
// const handle404 = require('./error-handlers/404');
// const handle500 = require('./error-handlers/500');
const app = express(); // singleton
const PORT = process.env.PORT;
app.use(cors());


module.exports = {
    app,
    start: (PORT) => app.listen(PORT, ()=> {console.log(`Listening on port ${PORT}`)})
};