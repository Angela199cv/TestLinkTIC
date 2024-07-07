import request from 'supertest';
import app from '../src/index'; 

describe('GET /v1/products', () => {
  it('should return status 200 and the expected data', async () => {
    const response = await request(app).get('/v1/products');
    expect(response.status).toBe(200);
  });
});
