import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import { fetchSearchResults } from './actions/result_actions.js';
import { saveSearch } from './util/search_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={ store }/>, root);
    window.store = store;
    window.fetchSearchResults = fetchSearchResults;
    window.saveSearch = saveSearch;
});
