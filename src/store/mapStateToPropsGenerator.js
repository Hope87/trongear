const mapStateToPropsGenerator = (component) => {
    switch(component){
        case 'Header':
            return (state) => ({
                isLogin: state.loginPage.isLogin
            });
        default: return undefined;
    }
}

export default mapStateToPropsGenerator;