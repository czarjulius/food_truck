import request from 'supertest';
import app from '../../src/app';

describe('Data API', () => {
  describe('Route', () => {
    it('should accept valid route', async () => {
      const response = await request(app).get('/');

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Service up and running..');
    });

    it('should handle invalid route by name', async () => {
      const response = await request(app).get('/fjjggkdkdk');

      expect(response.status).toBe(404);
    });
  });
});
