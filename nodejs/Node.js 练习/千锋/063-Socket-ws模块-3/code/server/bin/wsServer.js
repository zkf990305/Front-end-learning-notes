//  websocket响应
const WebSocket = require("ws");
const JWT = require("../util/JWT");
WebSocketServer = WebSocket.WebSocketServer;
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function connection(ws, req) {
  const myURL = new URL(req.url, "http://localhost:3000");
  const payload = JWT.verify(myURL.searchParams.get("token"));
  if (payload) {
    ws.user = payload;
    ws.send(
      createMessage(WebSocketType.GroupChat, null, "欢迎来到聊天室-群聊版")
    );
    sendBroadList(); //发送好友列表
  } else {
    ws.send(createMessage(WebSocketType.Error, null, "未授权, token过期"));
  }

  ws.on("message", function message(data, isBinary) {
    const msgObj = JSON.parse(data);
    switch (msgObj.type) {
      case WebSocketType.GroupList: {
        //群列表
        ws.send(
          createMessage(
            WebSocketType.GroupList,
            ws.user,
            JSON.stringify(Array.from(wss.clients).map((item) => item.user))
          )
        );
        break;
      }
      case WebSocketType.GroupChat: {
        // 转发给其他人
        wss.clients.forEach(function each(client) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(
              createMessage(WebSocketType.GroupChat, ws.user, msgObj.data),
              { binary: false }
            );
          }
        });
        break;
      }
      case WebSocketType.SingleChat: {
        //私聊

        wss.clients.forEach(function each(client) {
          if (
            client.user.username === msgObj.to &&
            client.readyState === WebSocket.OPEN
          ) {
            client.send(
              createMessage(WebSocketType.SingleChat, ws.user, msgObj.data)
            );
          }
        });
        break;
      }
      default: {
        //错误
        break;
      }
    }
  });
  ws.on("close", function () {
    //删除当前用户
    wss.clients.delete(ws.user);
    sendBroadList(); //发送好用列表
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

function sendBroadList() {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        createMessage(
          WebSocketType.GroupList,
          client.user,
          JSON.stringify(Array.from(wss.clients).map((item) => item.user))
        )
      );
    }
  });
}
