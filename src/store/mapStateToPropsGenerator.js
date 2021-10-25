const mapStateToPropsGenerator = (component) => {
    switch(component){
        case 'App':
            return (state) => ({
                isLogin: state.loginPage.isLogin
            });
        default: return undefined;
    }
}

export default mapStateToPropsGenerator;