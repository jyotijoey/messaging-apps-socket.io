import React from 'react'
import "./input.css";

function Input({message, setMessage, sendMessage}) {
    return (
        <form className="form">
            <input
            className="form" 
            type="text" 
            placeholder="Type a message..."
            value={message} 
            onChange={(event)=>setMessage(event.target.value)} 
            onKeyPress={event => event.key ==="Enter" ? sendMessage(event):null} 
                
            />
            <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input;
