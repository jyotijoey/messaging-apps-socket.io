const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const router = require("./router.js");


const app = express();

const server =http.createServer(app);
const io = socketio(server);

app.use(router);

io.on("connection", (socket) => {
    console.log("connected", socket);
    socket.on("disconnect", () => {
        console.log("User has left");
    })
})



server.listen(3001, () => {
    console.log("up and running at 3001");
})