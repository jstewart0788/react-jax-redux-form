import { POST_GAME } from './constants';

const initialState = {};

export default function gamePost(state = initialState, action){
  switch(action.type){
    case POST_GAME:
      return {...state, postStatus: action.success};
    default:
      return state;
  }
};
