import React from 'react'

function Input({message, setMessage, sendMessage}) {
    return (
        <div>
            <input
            className="form" 
            type="text" 
            placeholder="Type a message..."
            value={message} 
            onChange={(event)=>setMessage(event.target.value)} 
            onKeyPress={(event) => event.key ==="Enter" ? sendMessage(event):null} />
            <button className="sendButton" onClick={(event)=>sendMessage(event)}> Send </button>
        </div>
    )
}

export default Input
