const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber(SUM)", function () {
  it("sum of two whole numbers", function() {
    assert.strictEqual(calculateNumber('SUM',1,3), 4);
  });
  it("floating point numbers", function() {
    assert.strictEqual(calculateNumber('SUM',1.0, 3.0), 4);
  });
  it("rounding off a backwards and add", function() {
    assert.strictEqual(calculateNumber('SUM',1.223, 3), 4);
  });
  it("rounding off a forward and add", function() {
    assert.strictEqual(calculateNumber('SUM',1.678, 3), 5);
  });
  it("rounding b back and adding", function() {
    assert.strictEqual(calculateNumber('SUM',1, 3.333), 4);
  });
  it("rounding off b forward and adding", function () {
    assert.strictEqual(calculateNumber('SUM',1, 3.764), 5);
  });
  it("rounding off foward both a and b and add them together", function () {
    assert.strictEqual(calculateNumber('SUM',1.8956, 3.844), 6);
  });
  it("rounding down both a and b with trailing 9's", function () {
    assert.equal(calculateNumber('SUM',1.4999, 3.49999), 4);
  });
  });

  describe("calculateNumber(SUBTRACT)", function() {
    it("Subtract two whole numbers when b>a", function() {
        assert.strictEqual(calculateNumber('SUBTRACT',3, 1), 2);
    });
    it("Subtracting whole numbers when a>b", function() {
        assert.strictEqual(calculateNumber('SUBTRACT',1,3), -2);
    });
    it("rounding down a using trailing 9's", function() {
        assert.strictEqual(calculateNumber('SUBTRACT',3.4999, 1), 2);
    });
    it("rounding up a with trailing 0's", function() {
        assert.strictEqual(calculateNumber('SUBTRACT',3.50000, 1), 3);
    });
    it("rounding down b with trailing 9's", function() {
        assert.strictEqual(calculateNumber('SUBTRACT',3, 1.499999), 2);
    });
    it("rounding up b with trailing 0's", function() {
        assert.strictEqual(calculateNumber('SUBTRACT',3, 1.50000), 1);
    });
    it("rounding down both a and b", function() {
        assert.strictEqual(calculateNumber('SUBTRACT',3.4999, 1.4999), 2);
    });
    it("rounding up both a and b", function() {
        assert.strictEqual(calculateNumber('SUBTRACT',3.5, 1.5), 2);
    });
  });

  describe("calculateNumber(DIVIDE)", function() {
    it("When b=0", function() {
        assert.strictEqual(calculateNumber('DIVIDE',4,0), 'Error');
    });
    it("rounding down a using trailing 9's", function() {
        assert.strictEqual(calculateNumber('DIVIDE',3.4999, 1), 3);
    });
    it("rounding up a with trailing 0's", function() {
        assert.strictEqual(calculateNumber('DIVIDE',3.50000, 1), 4);
    });
    it("rounding down b with trailing 9's", function() {
        assert.strictEqual(calculateNumber('DIVIDE',4, 1.499999), 4);
    });
    it("rounding up b with trailing 0's", function() {
        assert.strictEqual(calculateNumber('DIVIDE',4, 1.50000), 2);
    });
    it("rounding down both a and b", function() {
        assert.strictEqual(calculateNumber('DIVIDE',3.4999, 1.4999), 3);
    });
    it("rounding up both a and b", function() {
        assert.strictEqual(calculateNumber('DIVIDE',3.5, 1.5), 2);
    });
  });
