import React, { Component } from 'react';

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

export default class GamePost extends Component {
  constructor(props){
    super(props);
    this.state={
      form: {
        game: "Final Fantasy XIV"
      },
      api_url: "http://localhost:4000/api"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    switch(e.target.ref){
      case "game":
        this.setState({form:{...this.state.form, game: e.target.value}});
        break;
      case "test":
        this.setState({form:{...this.state.form, location: e.target.value}});
        break;
      case "lead":
        this.setState({form:{...this.state.form, lead: e.target.value}});
        break;
      case "currentPlayers":
        this.setState({form:{...this.state.form, currentPlayers: e.target.value}});
        break;
      case "playersNeeded":
        this.setState({form:{...this.state.form, playersNeeded: e.target.value}});
        break;
      case "description":
        this.setState({form:{...this.state.form, description: e.target.value}});
        break;
      default:
        break;
    }
  }

  handleSubmit(e){
    console.log(this.state)
    e.preventDefault();
  }

  render(){
    return(
      <div style={Styles.formContainer}>
        <form style={Styles.form} onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label style={Styles.formElement} > Game
              <select
                className="form-control"
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
                ref="test"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.form.location}
              />
            </label>
          </div>
          <div className="form-group">
            <label style={Styles.formElement} > Group Lead
              <input
                type="text"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.form.lead}
              />
            </label>
          </div>
          <div className="form-group">
            <label style={Styles.formElement} > Number of Players
              <input
                type="number"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.form.currentPlayers}
              />
            </label>
          </div>
          <div className="form-group">
            <label style={Styles.formElement} > Players Needed
              <input
                type="number"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.form.playersNeeded}
              />
            </label>
          </div>
          <div className="form-group">
            <label style={Styles.formElement} > Description
              <textarea
                style={Styles.textArea}
                className="form-control"
                id="description"
                rows="3"
                onChange={this.handleChange}
                value={this.state.form.description}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
};
