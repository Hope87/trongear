import LoginAC from "./actionCreators/LoginAC"

const mapDispatchToPropsGenerator = (component) => {
    switch(component){
        case 'Header':
            return (dispatch) => ({
                setIncrementValue: (isLogin) => dispatch(LoginAC(isLogin))
            });

        default: return undefined;
    }
}

export default mapDispatchToPropsGenerator;