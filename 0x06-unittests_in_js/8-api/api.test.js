const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('API Tests', () => {
  describe('Index Page', () => {
    it('Should return status code 200', async () => {
      const res = await request(app).get('/');
      expect(res.status).to.equal(200);
    });

    it('Should return the message "Welcome to the payment system"', async () => {
      const res = await request(app).get('/');
      expect(res.text).to.equal('Welcome to the payment system');
    });

    it('Should not return an incorrect message', async () => {
      const res = await request(app).get('/');
      expect(res.text).to.not.equal('Incorrect message');
    });
  });
});
