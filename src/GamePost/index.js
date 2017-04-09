import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { Field, reduxForm, SubmissionError, initialize } from 'redux-form';
import axios from 'axios';

import {API_URL} from './constants';
import { postGame } from './actions';

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
  },
  error: {
    color: 'red'
  }
}
const required = value => value ? undefined:'Required'
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

const renderInput = ({input, label, type, meta: {touched, error, warning}}) => {
  return(
    <div style={error || warning ? Styles.error : {}}>
      <label> {label} </label>
      <div>
        <input className="form-control" {...input} placeholder={label} type={type} />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
}

const renderSelectField= ({input, label, meta: {touched, error, warning}, children}) => {
  return(
    <div style={error || warning ? Styles.error : {}}>
      <label> {label} </label>
      <div>
        <select className="form-control" {...input} >
           {children}
        </select>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
}

const renderTextArea = ({input, label, rows, meta: {touched, error, warning}}) => {
  return(
    <div style={error || warning ? Styles.error : {}}>
      <label> {label} </label>
      <div>
        <textarea className="form-control" {...input} placeholder={label} rows={rows} />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
}

class GamePost extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount(){
    if(this.props.params){
      axios.get(`${API_URL}/game`, {
        params: {
          id: this.props.params.id
        }
      })
      .then(({data}) => {
        console.log(data)
        this.props.initForm('gamePost', data)
      })
      .catch(err => {
        console.log(err)
      });
    }
  }

  onSubmit(values){
    return new Promise(resolve => this.props.postGame(resolve, values)).then((success) => {
      if(success){
        browserHistory.push('/')
      }
      else{
        throw new SubmissionError({_error: "failed to post"})
      }
    })
  }

  render(){
    const {handleSubmit, error } = this.props;
    return(
      <div style={Styles.formContainer}>
        <form style={Styles.form} onSubmit={handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <Field
              name="game"
              component={renderSelectField}
              label="Game"
              validate={required}
            >
              <option></option>
              <option value="ffxiv" >Final Fantasy XIV</option>
              <option value="d&d" >Dungeons & Dragons</option>
              <option value="dota" >DotA 2</option>
            </Field>
          </div>
          <div className="form-group">
            <Field
              type="email"
              label="Email"
              name="email"
              component={renderInput}
              validate={email}
            />
          </div>
          <div className="form-group">
            <Field
              type="text"
              name="lead"
              label="Lead"
              component={renderInput}
            />
          </div>
          <div className="form-group">
            <Field
              type="number"
              name="currentPlayers"
              label="Number of Players"
              component={renderInput}
            />
          </div>
          <div className="form-group">
            <Field
              type="number"
              label="Players Needed"
              component={renderInput}
              name="playersNeeded"
            />
          </div>
          <div className="form-group">
            <Field
              label="Description"
              style={Styles.textArea}
              name="description"
              component={renderTextArea}
              rows="3"
            />
          </div>
          <div>
            {error && <strong style={ Styles.error}> {error}</strong>}
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

GamePost = reduxForm({
  form: 'gamePost'
})(GamePost)

export default connect(mapStateToProps,{postGame, initForm: initialize})(GamePost)
