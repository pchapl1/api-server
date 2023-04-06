const server = require('../server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('GET /nonexistent', () => {
    test('should return a 404 error', async () => {
      const response = await request(app).get('/nonexistent');
      expect(response.status).toBe(404);
    });
  });