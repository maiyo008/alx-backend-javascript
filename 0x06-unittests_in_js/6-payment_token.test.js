const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with successful response', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        assert.deepStrictEqual(response, { data: 'Successful response from the API' });
        done();
      })
      .catch((error) => done(error));
  });

  it('should return a rejected promise with failed response', (done) => {
    getPaymentTokenFromAPI(false)
      .then(() => done(new Error('Promise was resolved, but expected rejection')))
      .catch((error) => {
        assert.strictEqual(error.message, 'Failed response from the API');
        done();
      });
  });
});
