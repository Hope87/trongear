import LoginAC from "./actionCreators/LoginAC"

const mapDispatchToPropsGenerator = (component) => {
    switch(component){
        
        case 'App':
        case 'Login':
            return (dispatch) => ({
                setIsLogin: (isLogin) => dispatch(LoginAC(isLogin))
            });

        default: return undefined;
    }
}

export default mapDispatchToPropsGenerator;