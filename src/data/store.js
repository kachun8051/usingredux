// import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/login';

const store = configureStore(loginReducer);

export default store;

