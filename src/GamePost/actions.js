import axios from 'axios';
import { POST_GAME, WIPE_STATUS } from './constants';

const api_url = "http://localhost:4000/api"

export function postGame(data){
  const request = axios.post(`${api_url}/game`, {data});

  return (dispatch) => {
    request.then(({data}) => {
      console.log("GamePost Returned Data",data)
      dispatch({
        type: POST_GAME,
        success: data._id ? true : false
      });
    });
  }
};

export function wipeStatus(){
  return{
    type: WIPE_STATUS
  }
}
