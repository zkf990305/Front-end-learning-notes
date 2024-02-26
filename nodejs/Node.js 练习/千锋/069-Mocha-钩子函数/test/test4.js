const chai = require("chai");
const expect = chai.expect;

describe("expect Demo", function () {
  it("use expect lib", function () {
    const value = "hello";
    const number = 3;

    expect(number).to.be.at.most(5);
    expect(number).to.be.at.least(3);
    expect(number).to.be.within(1, 4);

    expect(value).to.exist;
    expect(value).to.be.a("string");
    expect(value).to.equal("hello");
    expect(value).to.not.equal("您好");
    expect(value).to.have.length(5);
  });
});
