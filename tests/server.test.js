const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
const {sequelize} = require('../src/models/index');
const e = require('express');
const { DESCRIBE } = require('sequelize/types/query-types');

// have to initialize the db before the tests
beforeAll(async()=>{
    await sequelize.sync()
})

// have to drop the db after the tests
afterAll(async()=>{
    await sequelize.drop()
})

describe('testing data models')

// describe('GET bad route', () => {
//     test('should return a 404 error', async () => {
//         const response = await request.get('/nonexistent');
//         expect(response.status).toBe(404);
//     });

//     test("404 for bad method", async ()=> {
//         const response = await request.patch('/food');
//         expect(response.status).toEqual(404);
//     })

//     test('get allFood should return 200', async () => {
//         const response = await request.get('/food');
//         expect(response.status).toEqual(200);
//         expect(Array.isArray(response.body)).toBeTruthy();
//     })

//     test('get all clothes should return 200', async () => {
//         const response = await request.get('/clothes');
//         expect(response.status).toEqual(200);
//     })

//     test('get 1 food should return 200', async () => {
//         const response = await request.get('/food/1');
//         expect(response.status).toEqual(200);
//     })

//     test('get 1 item of clothing should return 200', async () => {
//         const response = await request.get('/clothes/1');
//         expect(response.status).toEqual(200);
//     })
    
//     test('create food should return 200', async () => {
//         let mockObj = {
//             name: "chicken",
//             category: "meat"
//         }
//         const response = await request.post('/food').send(mockObj)
//         expect(response.status).toEqual(200);
//     })

    // test('create 1 item of clothing should return 200 and an object', async () => {
    //     let mockObj = {
    //         title: "shirt",
    //         category: "women's",
    //         quanity: 5
    //     }
    //     const response = await request.post('/clothes').send(mockObj);
    //     expect(response.status).toEqual(200);
    // })

    // test('update food should return 200', async ()=> {
        
    //     const response = await request.put('/food/1')
    // })

// });
