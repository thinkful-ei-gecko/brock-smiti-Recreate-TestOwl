import React from 'react';

function Participant(props) {
//console.log(props.participants);
  return (
    <div className="Participant">
        <p>{props.name}</p>
        <img alt="alt text" src={props.avatar}/>
        <p>{props.inSession?"In Session":"Left Session"}</p>
    </div>
  );
}

export default Participant;