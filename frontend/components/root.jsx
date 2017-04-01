import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import SearchContainer from './search/search_container.jsx';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
       <Route path="/" component={ App }>
         <IndexRoute component={ SearchContainer } />
         <Route path="/search" component={ SearchContainer } />
       </Route>
    </Router>
  </Provider>
);

export default Root;
