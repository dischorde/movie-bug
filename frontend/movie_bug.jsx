import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { fetchSearchResults } from './actions/result_actions.js';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.store = configureStore();
    ReactDOM.render(<h1>I'm a root!</h1>, root);
    window.fetchSearchResults = fetchSearchResults;
});
