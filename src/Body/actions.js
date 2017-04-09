import axios from 'axios';
import { FETCH_GAME_LIST } from './constants';

const api_url = "http://localhost:4000/api"

export function fetchGameList(){
  const request = axios.get(`${api_url}/game/all`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({
        type: FETCH_GAME_LIST,
        data
      });
    });
  }
};
