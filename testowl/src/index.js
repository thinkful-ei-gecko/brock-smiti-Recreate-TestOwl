import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import participants from './participants';
import chatEvents from './chatEvents';

ReactDOM.render(<App 
participants = {participants}
chatEvents = {chatEvents}
/>, document.getElementById('root'));