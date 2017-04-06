import { POST_GAME, WIPE_STATUS } from './constants';

const initialState = {};

export default function gamePost(state = initialState, action){
  switch(action.type){
    case POST_GAME:
      return {...state, postStatus: action.success};
    case WIPE_STATUS:
      return {...state, postStatus: null};
    default:
      return state;
  }
};
