const sum = require("../sum");
const chai = require("chai");
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
// console.log(sum(1, 2, 3));

// describe 一组测试，嵌套
// it 一个测试

describe("大的组1测试", () => {
  describe("小的组1测试", () => {
    it("sum() 结果应该返回 0 ", () => {
      assert.equal(sum(), 0);
    });
    it("sum(1) 结果应该返回 1 ", () => {
      assert.equal(sum(1), 1);
    });
    it("sum(1, 2) 结果应该返回 3 ", () => {
      assert.equal(sum(1, 2), 3);
    });
    it("sum(1, 2, 3) 结果应该返回 6 ", () => {
      assert.equal(sum(1, 2, 3), 6);
    });
  });
});

describe("大的组2测试", () => {
  describe("小的组2测试", () => {
    it("sum() 结果应该返回 0 ", () => {
      expect(sum()).to.equal(0);
    });
    it("sum(1) 结果应该返回 1 ", () => {
      sum(1).should.exist.and.equal(1);
    });
  });
});
