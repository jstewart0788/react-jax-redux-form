import React from 'react';
import {imageMap, nameMap} from './helpers';


const Styles = {
  gameGroup:{
    border: '1px solid blue',
    borderRadius: '50px',
    padding: '25px',
    margin: '0px 0px 50px 0px',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  imageContainer:{
    margin: '0px 40px'
  },
  image:{
    maxWidth: '225px',
    maxHeight: '225px'
  }
}

export default function GameGroup(props){
  return(
    <div style={Styles.gameGroup}>
        <div style={Styles.imageContainer}>
          <img
            style={Styles.image}
            src={imageMap(props.gameData.game)}
            alt={`${props.gameData.game} Avatar`}
          />
        </div>
        <div>
          <h2>{nameMap(props.gameData.game)}</h2>
          <p>Email: {props.gameData.email}</p>
          <p>Group Lead: {props.gameData.lead} </p>
          <p>Current Players: {props.gameData.currentPlayers}</p>
          <p>Players Needed: {props.gameData.playersNeeded}</p>
          <p>Description: {props.gameData.description}</p>
        </div>
    </div>
  )
}
