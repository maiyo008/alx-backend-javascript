const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should log correct message for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    assert(consoleLogSpy.calledOnce);
    assert(consoleLogSpy.calledWithExactly('The total is: 120'));
  });

  it('should log correct message for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    assert(consoleLogSpy.calledOnce);
    assert(consoleLogSpy.calledWithExactly('The total is: 20'));
  });
});
