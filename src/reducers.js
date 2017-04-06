import { combineReducers } from 'redux';

import body from './Body/reducers';
import gamePost from './GamePost/reducers';

const rootReducer = combineReducers({
    body,
    gamePost
});

export default rootReducer
