const express = require("express");
const app = express();
const port = 5000;
const socketio = require("socket.io");
const http = require("http");

const server = http.createServer(app);
const io = socketio(server).listen(server);
const gio = require("globalio");
app.use(gio(io));

app.use("/socket", require("./socket.js"));
server.listen(port, () => console.log("Server at 5000"));
