const express = require('express');
const { NUMBER } = require('sequelize');
const foodRouter = express.Router();
const { Food } = require('../models/food');

foodRouter.get('/', readAllFood);
foodRouter.get('/:id', readOneFood);
foodRouter.post('/', createFood);
foodRouter.put('/:id', updateFood);
foodRouter.delete('/:id', deleteFood);


async function readAllFood(req, res, next) {
    let data = await Food.findAll();
    res.json(data)
}

async function readOneFood(req, res, next) {
    let id = req.params.id;
    console.log("id: ", id)
    let data = await Food.findByPk(id);
    console.log(data)
    res.json(data);
}

async function createFood(req, res, next) {
    const food = await Food.create(req.body);
    res.json(food);
}

async function updateFood(req, res, next) {
    const id = req.params.id;
    const updatedFood = {
        name: req.body.name,
        category: req.body.category,
        id: id
    }

    await Food.findOne({
        where: {id: id}
    })
    .then(food => {
        if (food) {
            return food.update(updatedFood)
        }
    })
    .then(res.json(updatedFood))

}

async function deleteFood(req, res, next) {
    const id = req.params.id;
    await Food.findOne(
        {
            where: {id: id}
        } 
    )
    .then(food => {return food.destroy(food)})
    .then(food => res.json(food))
}

module.exports = foodRouter;