const express = require('express');
const clothesRouter = express.Router();
const { Clothes } = require('../models/clothes');

clothesRouter.get('/', readAllClothes);
clothesRouter.get('/:id', readOneClothes);
clothesRouter.post('/', createClothes);
clothesRouter.put('/:id', updateClothes);
clothesRouter.delete('/:id', deleteClothes);


async function readAllClothes(req, res, next) {
    let data = await Clothes.findAll();
    res.json(data)
}

async function readOneClothes(req, res, next) {
    let id = req.params.id;
    console.log("id: ", id)
    let data = await Clothes.findByPk(id);
    console.log(data)
    res.json(data);
}

async function createClothes(req, res, next) {
    const clothes = await Clothes.create(req.body);
    res.json(clothes);
}

async function updateClothes(req, res, next) {
    const id = req.params.id;
    const updatedClothes = {
        title: req.body.title,
        category: req.body.category,
        quantity: req.body.quantity,
        id: id
    }

    await Clothes.findOne({
        where: {id: id}
    })
    .then(food => {
        if (food) {
            return food.update(updatedClothes)
        }
    })
    .then(res.json(updatedClothes))

}

async function deleteClothes(req, res, next) {
    const id = req.params.id;
    await Clothes.findOne(
        {
            where: {id: id}
        } 
    )
    .then(clothes => {return clothes.destroy(clothes)})
    .then(clothes => res.json(clothes))
}

module.exports = clothesRouter;