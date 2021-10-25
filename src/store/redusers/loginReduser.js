import { RightToken } from '../../fetches/fetches';
import LoginAC from '../actionCreators/LoginAC';
import LOGIN_ACTION from '../actions/LoginAction';
import store from '../store';

const initialState = {
    loginPage: {
        isLogin: localStorage.hasOwnProperty('access_token')
    }
}

export const isLoginReduser = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_ACTION:
            return {...state, loginPage: {isLogin: action.isLogin}};

        default: return state;
    }
}