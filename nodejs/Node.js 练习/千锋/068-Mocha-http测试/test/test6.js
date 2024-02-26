const axios = require("axios");
const request = require("supertest");
const assert = require("assert");
const app = require("../app");
describe("测试接口-1", function () {
  it("返回html代码片段测试", async () => {
    //     axios axios.get
    let res = await axios.get("http://localhost:3000");
    assert.strictEqual(res.data, "<h1>hello world</h1>");
  });
});

describe("测试接口-2", function () {
  let server = app.listen(3001);
  describe("#test server", () => {
    it("返回html代码片段测试-2", async () => {
      //     axios axios.get
      await request(server)
        .get("/")
        .expect("Content-Type", /text\/html/)
        .expect(200, "<h1>hello world</h1>");
      // assert.strictEqual(res.data, "hello");
    });
    after(function () {
      server.close();
    });
  });
});
