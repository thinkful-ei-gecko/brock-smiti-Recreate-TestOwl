import React from 'react';
import Participant from './Participant';

function ParticipantList(props) {
    console.log(props.participants);

    const ParticipantList = props.participants.filter(participant => participant.inSession).map(participant => <Participant 
        name = {participant.name}
        avatar = {participant.avatar}
        id = {participant.id}
        inSession = {participant.inSession}
        onStage = {participant.onStage}
        />);

    const NonParticipantList = props.participants.filter(participant => !participant.inSession).map(participant => <Participant 
        name = {participant.name}
        avatar = {participant.avatar}
        id = {participant.id}
        inSession = {participant.inSession}
        onStage = {participant.onStage}
        />);

  return (
    <div className="ParticipantList">
        {ParticipantList}
        {NonParticipantList}
    </div>
  );
}

export default ParticipantList;