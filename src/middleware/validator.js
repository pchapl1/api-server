'use strict';

function validator(req, res, next){
    if (!req.query.name){
        next('name not found');
    }
    else {
        next();
    }
}

module.exports = validator;