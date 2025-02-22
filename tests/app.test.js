const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
    it('should return a JSON response with Hello, World!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message', 'Hello, World!');
    });
});
