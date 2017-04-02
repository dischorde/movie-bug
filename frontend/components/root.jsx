import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import SearchContainer from './search/search_container.jsx';
import SearchResultsContainer from './search/search_results_container.jsx';
import MediaDetailContainer from './media_detail/media_detail_container.jsx';
import Profile from './profile/profile.jsx';
import FavoritesContainer from './profile/favorites_container.jsx';
import RecentSearchesContainer from './profile/recent_searches_container.jsx';


const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
       <Route path="/" component={ App }>
         <IndexRoute component={ SearchContainer } />
         <Route path="/search" component={ SearchContainer } />
         <Route path="/results" component={ SearchResultsContainer } />
         <Route path="/results/:imdbID" component={ MediaDetailContainer } />
         <Route path="/profile" component={ Profile }>
           <IndexRoute component={ FavoritesContainer } />
             <Route path="favorites" component={ FavoritesContainer } />
             <Route path="recent-searches" component={ RecentSearchesContainer } />
         </Route>
       </Route>
    </Router>
  </Provider>
);

export default Root;
