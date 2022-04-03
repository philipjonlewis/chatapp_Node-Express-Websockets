const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  console.log("new web socket connection");

  socket.emit("message", "Welcome to yahoo messenger");
});

server.listen(3000, () => {
  console.log("connected");
});
