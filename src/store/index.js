import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import asyncReducer from './reducers/asyncReducer';

const store = createStore(asyncReducer, applyMiddleware(thunk));

export default store;
