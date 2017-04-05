import React from 'react';

import HeaderImage from '../assets/images/header.jpg'

const Styles = {
  header: {
    height: "100vh",
    background:`url(${HeaderImage})`,
    backgroundSize: 'cover'
  },
  headerTitle : {
      color: 'white',
      background:'rgba(0, 0, 0, .33)',
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center'
  }
}

export default function Header() {
    return (
      <div>
        <div style={Styles.header}>
          <div className="jumbotron" style={Styles.headerTitle}>
            <h1>Gamer Gathering</h1>
            <h2>Find A Group Or Recruit Members!</h2>
          </div>
        </div>
      </div>
    );
}
