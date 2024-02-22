//  websocket响应
const WebSocket = require("ws");
const JWT = require("../util/JWT");
WebSocketServer = WebSocket.WebSocketServer;
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function connection(ws, req) {
  console.log(req.url);
  const myURL = new URL(req.url, "http://localhost:3000");
  const payload = JWT.verify(myURL.searchParams.get("token"));
  if (payload) {
    // ws.user = payload
    ws.send(
      createMessage(WebSocketType.GroupChat, null, "欢迎来到聊天室-群聊版")
    );
    console.log(payload);
  } else {
    ws.send(createMessage(WebSocketType.Error, null, "未授权, token过期"));
  }

  ws.on("message", function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  // ws.send("欢迎来到聊天室-WS版");
});
const WebSocketType = {
  Error: 0, //错误
  GroupList: 1, //群列表
  GroupChat: 2, //群聊
  SingleChat: 3, //私聊
};
function createMessage(type, user, data) {
  return JSON.stringify({
    type,
    user,
    data,
  });
}
