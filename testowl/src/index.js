import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import participants from './participants';
import chatEvents from './chatEvents';
import stage from './Stage';

ReactDOM.render(<App 
participants = {participants}
chatEvents = {chatEvents}
stage = {stage}
/>, document.getElementById('root'));