import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import GameGroup from '../GameGroup';
import { fetchGameList } from './actions';

const Styles = {
  main:{
    background: 'white',
    padding: '100px',
    color: 'blue'
  },
  button: {
    margin: '0px 0px 45px 45px'
  }
}

class Body extends Component {

  componentWillMount() {
    this.props.fetchGameList();
  }

  renderGames(){
    return (
      this.props.games ?
      this.props.games.map((game, index) => {
        return (
          <Link
            to={`/game/edit/${game._id}`}
            key={`${game._id}`}
          >
            <GameGroup gameData={game} />
          </Link>
        )
      }) :
      <div> Loading . . . </div>
    );
  }

  render() {
    return (
      <div>
        <div style={Styles.main}>
          <Link to="/game/new" className="btn btn-primary" style={Styles.button}>
            Recruit Members
          </Link>
          {this.renderGames()}
        </div>
      </div>
    )};
}

function mapStateToProps(state) {
  console.log("mapStateToProps Body => ", state)
  return {
    games: state.body.games
  }
}


export default connect(mapStateToProps, {fetchGameList})(Body);
