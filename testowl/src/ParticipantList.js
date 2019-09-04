import React from 'react';
import Participant from './Participant';

function ParticipantList(props) {
    console.log(props.participants);
  return (
    <div className="ParticipantList">
        <Participant 
        name = {props.participants[0].name}
        avatar = {props.participants[0].avatar}
        id = {props.participants[0].id}
        inSession = {props.participants[0].inSession}
        onStage = {props.participants[0].onStage}
        />
    </div>
  );
}

export default ParticipantList;