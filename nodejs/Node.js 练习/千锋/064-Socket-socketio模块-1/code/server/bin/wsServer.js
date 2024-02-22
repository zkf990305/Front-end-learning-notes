const JWT = require("../util/JWT");

function start(server) {
  const io = require("socket.io")(server);
  io.on("connection", (socket) => {
    console.log("连接成功", socket.handshake.query.token);
    const payload = JWT.verify(socket.handshake.query.token);
    if (payload) {
      socket.user = payload; // 知道谁发的消息
      // 发送欢迎信息

      socket.emit(
        WebSocketType.GroupChat,
        createMessage(null, "欢迎来到聊天室")
      );
      sendBroadList(io); //发送用户列表
    } else {
      socket.emit(WebSocketType.Error, createMessage(null, "token过期"));
    }

    socket.on(WebSocketType.GroupList, () => {
      socket.emit(
        WebSocketType.GroupList,
        createMessage(
          null,
          Array.from(io.sockets.sockets)
            .map((item) => item[1].user)
            .filter((item) => item)
        )
      );
    });

    socket.on(WebSocketType.GroupChat, (msgObj) => {
      socket.broadcast.emit(
        WebSocketType.GroupChat,
        createMessage(socket.user, msgObj.data)
      );
    });

    socket.on(WebSocketType.SingleChat, (msgObj) => {
      Array.from(io.sockets.sockets).forEach(function (socket) {
        if (socket[1].user.username === msgObj.to) {
          socket[1].emit(
            WebSocketType.SingleChat,
            createMessage(socket[1].user, msgObj.data)
          );
        }
      });
    });

    socket.on("disconnect", (reason) => {
      sendBroadList(io); //发送用户列表
    });
  });
}

const WebSocketType = {
  Error: 0, //错误
  GroupList: 1, //群列表
  GroupChat: 2, //群聊
  SingleChat: 3, //私聊
};
function createMessage(user, data) {
  return {
    user,
    data,
  };
}

function sendBroadList(io) {
  io.sockets.emit(
    WebSocketType.GroupList,
    createMessage(
      null,
      Array.from(io.sockets.sockets)
        .map((item) => item[1].user)
        .filter((item) => item)
    )
  );
}

module.exports = start;
