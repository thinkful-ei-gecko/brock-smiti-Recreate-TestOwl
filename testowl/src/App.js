import React from 'react';
import ParticipantList from './ParticipantList';
import ChatLog from './ChatLog';
import Stage from './Stage';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <ParticipantList 
      participants = {props.participants}/>
      <Stage 
      participants = {props.participants}/>
      <ChatLog 
      chatEvents = {props.chatEvents}
      participants = {props.participants}/>
    </div>
  );
}

export default App;