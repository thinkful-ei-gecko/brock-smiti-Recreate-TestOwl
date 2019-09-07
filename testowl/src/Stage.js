import React from 'react';
import StageList from './StageList';

function Stage(props) {
  return (
    <div className="Stage">
      <StageList 
      participants={props.participants}/>
    </div>

  );
}

export default Stage;