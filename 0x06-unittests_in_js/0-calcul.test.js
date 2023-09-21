const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber", function () {
  it("sum of two whole numbers", function() {
    assert.strictEqual(calculateNumber(1,3), 4);
  });
  it("floating point numbers", function() {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4);
  });
  it("rounding off a backwards and add", function() {
    assert.strictEqual(calculateNumber(1.223, 3), 4);
  });
  it("rounding off a forward and add", function() {
    assert.strictEqual(calculateNumber(1.678, 3), 5);
  });
  it("rounding b back and adding", function() {
    assert.strictEqual(calculateNumber(1, 3.333), 4);
  });
  it("rounding off b forward and adding", function () {
    assert.strictEqual(calculateNumber(1, 3.764), 5);
  });
  it("rounding off foward both a and b and add them together", function () {
    assert.strictEqual(calculateNumber(1.8956, 3.844), 6);
  });
  it("rounding down both a and b with trailing 9's", function () {
    assert.equal(calculateNumber(1.4999, 3.49999), 4);
  });
  });
