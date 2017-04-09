import axios from 'axios';
import { POST_GAME } from './constants';

const api_url = "http://localhost:4000/api"

export function postGame(resolve, data){
  const request = axios.post(`${api_url}/game`, {data});

  return (dispatch) => {
    request.then(({data}) => {
      resolve(true);
      dispatch({
        type: POST_GAME,
        success: data
      });
    }).catch(error => {
      resolve(false);
      dispatch({
        type: POST_GAME,
        success: error
      });
    });
  }
};
