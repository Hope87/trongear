import { connect } from 'react-redux';
import mapDispatchToProps from '../../../store/mapDispatchToPropsGenerator';
import Login from './Login';


const LoginContainer = connect(null, mapDispatchToProps('Login'))(Login);

export default LoginContainer;