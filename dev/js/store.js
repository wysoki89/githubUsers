import thunk from 'redux-thunk';
import promise from 'redux-promise';
// import promise from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import logger from 'redux-logger';

import {createStore, applyMiddleware} from 'redux';

import axios from 'axios';

// const logger = createLogger();

export default store = createStore(
    allReducers,
    applyMiddleware(promise(), logger)
);