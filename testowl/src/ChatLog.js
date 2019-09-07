import React from 'react';
import ChatEvent from './ChatEvent'

function ChatLog(props) {
  const posts = props.chatEvents.map(chatEvent => {
    const participant = props.participants.find(p => {
      return (chatEvent.participantId === p.id)
    });
    chatEvent.name = participant.name;
    chatEvent.avatar = participant.avatar;
    return chatEvent;
  });

  const chatElements = posts.map(post => {
    return (
      <ChatEvent 
      timestamp = {post.timestamp}
      time = {post.time}
      type = {post.type}
      message = {post.message}
      name = {post.name}
      avatar = {post.avatar}/>
    )
  })

  return (
    <div className="App">
      {chatElements}
    </div>
  );
}

export default ChatLog;