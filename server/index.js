const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const router = require("./router.js");
const cors = require("cors");
const app = express();
const {addUser, removeUser, getUser, getUsersInRoom} = require("./users");

app.use(router);
app.use(cors());

const server =http.createServer(app);
const io = socketio(server, {cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});



io.on("connection", (socket) => {

    socket.on("join", ({name, room}, callback) => {
        const {error, user} = addUser({ id: socket.id, name, room});

        if(error) return callback(error);

        socket.emit("message", {user:"admin", text:`${user.name}, welcome to the room ${user.room}`});

        socket.broadcast.to(room).emit("message", {user:"admin", text:`${user.name}, has joined the room!`});

        socket.join(user.room);

        callback();
    });

    socket.on("sendMessage", (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit("message", {user: user.name, text:message});
        callback();
    })

    socket.on("disconnect", () => {
        console.log("User has left");
    })
})



server.listen(3001, () => {
    console.log("up and running at 3001");
})