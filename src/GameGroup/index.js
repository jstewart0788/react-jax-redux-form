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
        <div>
          <img src={FFXIV} alt={'FFXIV Avatar'} />
        </div>
        <div>
          <h2>
            Final Fantasy XIV
          </h2>
          <p>Location: Jacksonville, Fl</p>
          <p>Group Lead: Jonathan Stewart </p>
          <p>Current Players: 5</p>
          <p>Players Needed: 3</p>
          <p>
            Description: Recruiting for Alexander
            Savage static raid party. Need Tank and 2 DPS.
            Minimum ilvl 265
          </p>
        </div>
    </div>
  )
}
