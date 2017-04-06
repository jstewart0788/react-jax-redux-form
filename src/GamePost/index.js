import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

import { postGame } from './actions'

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
                value={this.state.form.game}
              >
                <option value="ffxiv" >Final Fantasy XIV</option>
                <option value="d&d" >Dungeons & Dragons</option>
                <option value="dota" >DotA</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label style={Styles.formElement} > Location
              <input
                type="text"
                name="location"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.form.location ? this.state.form.location : ""}
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
                value={this.state.form.lead ? this.state.form.lead : ""}
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
                value={this.state.form.currentPlayers ? this.state.form.currentPlayers: ""}
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
                value={this.state.form.playersNeeded ? this.state.form.playersNeeded : ""}
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
                value={this.state.form.description ? this.state.form.description : ""}
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

export default connect(mapStateToProps,{postGame})(GamePost)
