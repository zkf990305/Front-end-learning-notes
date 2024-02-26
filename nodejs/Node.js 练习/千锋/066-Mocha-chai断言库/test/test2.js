const chai = require("chai");
const assert = chai.assert;

describe("assert Demo", function () {
  it("use assert lib", function () {
    let value = "hello";
    assert.typeOf(value, "string");
    assert.equal(value, "hello");
    assert.lengthOf(value, 5);
  });
});
