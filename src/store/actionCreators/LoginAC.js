import LOGIN_ACTION from '../actions/LoginAction';

const LoginAC = (isLogin) => ({type: LOGIN_ACTION, isLogin: isLogin});

export default LoginAC;