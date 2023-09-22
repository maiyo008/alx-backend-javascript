const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    assert(calculateNumberStub.calledWithExactly('SUM', 100, 20));
    calculateNumberStub.restore();
  });

  it('should log correct message to console', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    assert(consoleLogSpy.calledWithExactly('The total is: 10'));
    calculateNumberStub.restore();
  });
});
