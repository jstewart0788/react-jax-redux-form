import React from 'react';
import GameGroup from '../GameGroup';

const Styles = {
  main:{
    background: 'white',
    padding: '100px',
    color: 'blue'
  }
}

export default function Body() {
    return (
      <div style={Styles.main}>
        <GameGroup />
      </div>
    );
}
