const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
const {sequelize} = require('../src/models/index');
const e = require('express');

// have to initialize the db before the tests
beforeAll(async()=>{
    await sequelize.sync()
})

// have to drop the db after the tests
afterAll(async()=>{
    await sequelize.drop()
})

describe('GET /nonexistent', () => {
    test('should return a 404 error', async () => {
        const response = await request.get('/nonexistent');
        expect(response.status).toBe(404);
    });

    test('get allFood should return 200', async () => {

        const response = await request.get('/food');
        expect(response.status).toEqual(200);
    })

    test('get 1 food should return 200', async () => {

        const response = await request.get('/food/1');
        expect(response.status).toEqual(200);
    })
    
    test('create food should return 200', async () => {
        let mockObj = {
            name: "chicken",
            category: "meat"
        }
        const response = await request.post('/food').send(mockObj)
        expect(response.status).toEqual(200);
    })

    test('update food should return 200', async ()=> {
        
        const response = await request.put('/food/1')
    })

});
