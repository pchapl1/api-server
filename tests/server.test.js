const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
const {sequelize} = require('../src/models/index')

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
    
    test('should return 200', async () => {
        let mockObj = {
            name: "chicken",
            category: "meat"
        }
        const response = await request.post('/food').send(mockObj)
        console.log(response)
        expect(response.status).toEqual(200);
    })
});
