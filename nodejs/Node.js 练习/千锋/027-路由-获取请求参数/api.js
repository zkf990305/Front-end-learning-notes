function render(res, data, type = "") {
  res.writeHead(200, {
    "Content-Type": `${type?type:"application/json"};charset=utf8`
  })

  res.write(data)
  res.end()
}


const apiRouter = {
  "/api/login": (req, res) => {
    // 获取参数
    const myURL = new URL(req.url, "http://localhost")
    console.log(myURL.searchParams);
    if (myURL.searchParams.get("username") === "admin" && myURL.searchParams.get("password") === "123456") {
      render(res, '{"ok": 1}');
    } else {
      render(res, '{"ok": 0}');
    }
  },
  "/api/loginpost": (req, res) => {
    // 获取参数
    let post = ""
    req.on("data", chunk => {
      post += chunk
    })
    req.on("end", () => {
      try {
        const postData = JSON.parse(post);
        console.log(postData);
        render(res, '{"ok": 0}');
      } catch (error) {
        console.error("Error parsing JSON:", error);
        render(res, '{"ok": 0}');
      }
    });
  }
}

module.exports = apiRouter;