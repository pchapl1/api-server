'use strict';

require('dotenv').config();
const server = require('./src/server');

const sequelize = require('./src/models/food');
const PORT = process.env.PORT || 3002;

sequelize.sync().then(()=>{
    server.start(PORT);
}).catch(error=>{
    console.log('connection error: ', error);
})