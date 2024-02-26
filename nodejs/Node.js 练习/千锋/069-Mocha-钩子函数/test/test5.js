const fs = require("fs").promises;
const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
describe("异步测试-1", () => {
  it("test async function", async function () {
    const data = await fs.readFile("./1.txt", "utf8");

    expect(data).to.equal("hello");
  });
});

describe("异步测试-2", () => {
  it("test async function", async function () {
    const data = await fs.readFile("./1.txt", "utf8");

    assert.strictEqual(data, "hello");
  });
});
