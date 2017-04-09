import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import body from './Body/reducers';
import gamePost from './GamePost/reducers';

const rootReducer = combineReducers({
    body,
    gamePost,
    form: formReducer
});

export default rootReducer
