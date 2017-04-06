import { FETCH_GAME_LIST } from './constants';

const initialState = {};

export default function body(state = initialState, action){
  switch(action.type){
    case FETCH_GAME_LIST:
      return {...state, games: action.data};
    default:
      return state;
  }
};
