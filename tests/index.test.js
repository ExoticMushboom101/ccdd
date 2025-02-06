const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('responds with json message', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual({ message: 'Hello World!' });
  });
});