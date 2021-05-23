import React, { useEffect, useState } from 'react';
import queryString from "query-string";
import io from "socket.io-client";

let socket;

function Chat({location}) {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const ENDPOINT= "http://localhost:3001";

    useEffect(() => {

        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT)

        setName(name);
        setRoom(room);
        console.log(socket);
    }, [ENDPOINT, location.search]);

    return (
        <div>
            <h1>chat</h1>
        </div>
    )
}

export default Chat
