import { applyMiddleware, createStore } from 'redux';
import  { isLoginReduser }  from './redusers/loginReduser';
import thunkCreator from 'redux-thunk';


const store = createStore(isLoginReduser, applyMiddleware(thunkCreator));

window.store = store;

export default store;