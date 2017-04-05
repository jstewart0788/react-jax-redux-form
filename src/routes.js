import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App/';
import Body from './Body';
import GamePost from './GamePost';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Body} />
      <Route path="game/new" component={GamePost} />
    </Route>
);
