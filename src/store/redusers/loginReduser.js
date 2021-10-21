import LOGIN_ACTION from '../actions/LoginAction';

const initialState = {
    loginPage: {
        isLogin: false
    }
}

const isLoginReduser = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_ACTION:
            return {...state, loginPage: {isLogin: action.isLogin}};

        default: return state;
    }
}
export default isLoginReduser;