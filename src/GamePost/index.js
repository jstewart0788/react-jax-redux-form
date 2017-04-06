import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

import { postGame, wipeStatus } from './actions'

const Styles = {
  formContainer:{
    display: 'flex',
    justifyContent: 'center',
    padding:'75px'
  },
  form: {
    width: '40vw'
  },
  formElement: {
    width: '100%'
  }
}

class GamePost extends Component {
  constructor(props){
    super(props);
    this.state={
      game: "ffxiv"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const value = e.target.value;
    const name = e.target.name
    this.setState({ [name]: value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.postGame(this.state)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.postStatus)
      browserHistory.push('/')
  }

  componentWillUnmount(){
    this.props.wipeStatus();
  }

  render(){
    return(
      <div style={Styles.formContainer}>
        <form style={Styles.form} onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label style={Styles.formElement} > Game
              <select
                className="form-control"
                name="game"
                onChange={this.handleChange}
                value={this.state.game}
              >
                <option value="ffxiv" >Final Fantasy XIV</option>
                <option value="d&d" >Dungeons & Dragons</option>
                <option value="dota" >DotA 2</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label style={Styles.formElement} > Email
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.email ? this.state.email : ""}
              />
            </label>
          </div>
          <div className="form-group">
            <label style={Styles.formElement} > Group Lead
              <input
                type="text"
                name="lead"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.lead ? this.state.lead : ""}
              />
            </label>
          </div>
          <div className="form-group">
            <label style={Styles.formElement} > Number of Players
              <input
                type="number"
                name="currentPlayers"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.currentPlayers ? this.state.currentPlayers: ""}
              />
            </label>
          </div>
          <div className="form-group">
            <label style={Styles.formElement} > Players Needed
              <input
                type="number"
                className="form-control"
                name="playersNeeded"
                onChange={this.handleChange}
                value={this.state.playersNeeded ? this.state.playersNeeded : ""}
              />
            </label>
          </div>
          <div className="form-group">
            <label style={Styles.formElement} > Description
              <textarea
                style={Styles.textArea}
                className="form-control"
                name="description"
                rows="3"
                onChange={this.handleChange}
                value={this.state.description ? this.state.description : ""}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
};

function mapStateToProps(state) {
  console.log("mapStateToProps Body => ", state)
  return {
    postStatus: state.gamePost.postStatus
  }
}

export default connect(mapStateToProps,{postGame, wipeStatus})(GamePost)
