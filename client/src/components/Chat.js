import React, { useEffect, useState } from 'react';
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';
import "./Chat.css";

let socket;

function Chat({location}) {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [users, setUsers] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    // const ENDPOINT= "http://localhost:3001";

    useEffect(() => {

        const {name, room} = queryString.parse(location.search);

        socket = io.connect();

        setName(name);
        setRoom(room);
        console.log(socket);

        socket.emit("join", {name, room}, (error) => {
            if(error){
                alert(error);
            }
        });

    }, [location.search]);

    useEffect(() => {
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
    }, []);

    const sendMessage =(event) =>{

        event.preventDefault();

        if(message) {
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    }

    console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="container">
            <InfoBar room={room} />
            <Messages messages={messages}/>
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default Chat
