const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const router = require("./router.js");
const cors = require("cors");
const app = express();

app.use(router);
app.use(cors());

const server =http.createServer(app);
const io = socketio(server, {cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});



io.on("connection", (socket) => {
    console.log("connected", socket);
    socket.on("disconnect", () => {
        console.log("User has left");
    })
})



server.listen(3001, () => {
    console.log("up and running at 3001");
})