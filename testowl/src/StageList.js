import React from 'react';
import Participant from './Participant';

function StageList(props) {
    const StageList = props.participants.filter(participant => participant.onStage).map(participant => <Participant 
        name = {participant.name}
        avatar = {participant.avatar}
        id = {participant.id}
        inSession = {participant.inSession}
        onStage = {participant.onStage}
        />);

  return (
    <div className="StageList">
        {StageList}
    </div>
  );
}

export default StageList;