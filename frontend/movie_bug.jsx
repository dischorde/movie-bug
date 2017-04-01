import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { fetchSearchResults } from './actions/result_actions.js';
import { saveSearch } from './util/search_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.store = configureStore();
    ReactDOM.render(<h1>I'm a root!</h1>, root);
    window.fetchSearchResults = fetchSearchResults;
    window.saveSearch = saveSearch;
});
