import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import { requestAllFavorites,
         requestFavoritedList,
         createFavorite,
         deleteFavorite } from './actions/favorite_actions.js';
import { fetchFavorites,
         fetchFavoritedList,
         createNewFavorite,
         destroyFavorite } from './util/favorite_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  // window.fetchFavorites = fetchFavorites;
  // window.fetchFavoritedList = fetchFavoritedList;
  // window.createNewFavorite = createNewFavorite;
  // window.destroyFavorite = destroyFavorite;
  window.requestFavoritedList = requestFavoritedList;
  window.requestAllFavorites = requestAllFavorites;
  window.createFavorite = createFavorite;
  window.deleteFavorite = deleteFavorite;

  ReactDOM.render(<Root store={ store }/>, root);
});
