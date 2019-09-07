import React from 'react';

function ChatEvent(props) {
    return (
        <div className="ChatEvent">
            <p>{props.name}</p>
            <img alt="alt text" src={props.avatar}/>
        </div>
    );
}

export default ChatEvent;