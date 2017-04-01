import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import { fetchMediaDetail } from './actions/media_actions.js';
import { fetchMedia } from './util/omdb_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={ store }/>, root);
    window.store = store;
    window.fetchMediaDetail = fetchMediaDetail;
    window.fetchMedia = fetchMedia;
});
