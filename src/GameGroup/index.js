import React from 'react';

import FFXIV from '../assets/images/ffxiv.jpeg';

const Styles = {
  gameGroup:{
    border: '1px solid blue',
    borderRadius: '50px',
    padding: '25px',
    display: 'flex',
    justifyContent: 'space-around'
  }
}

export default function GameGroup(props){
  return(
    <div style={Styles.gameGroup}>
        <img src={FFXIV} alt={'FFXIV Avatar'} />
        <div>
          <h2>{props.gameData.game}</h2>
          <p>Location: {props.gameData.location}</p>
          <p>Group Lead: {props.gameData.lead} </p>
          <p>Current Players: {props.gameData.currentPlayers}</p>
          <p>Players Needed: {props.gameData.playersNeeded}</p>
          <p>Description: {props.gameData.description}</p>
        </div>
    </div>
  )
}
