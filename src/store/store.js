import { createStore } from 'redux';
import  loginReduser from './redusers/loginReduser';


const store = createStore(loginReduser);

export default store;