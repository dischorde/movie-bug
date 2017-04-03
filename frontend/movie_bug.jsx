import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import configureStore from './store/store.js';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
  const root = document.getElementById('root');

  const preloadedState = {
    session: {
      currentUser: window.currentUser || null
    }
  };

  let store = configureStore(preloadedState);
  window.store = store;

  ReactDOM.render(<Root store={ store }/>, root);
});
