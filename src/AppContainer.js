import { connect } from 'react-redux';
import mapStateToProps from './store/mapStateToPropsGenerator';
import App from './App';
import mapDispatchToProps from './store/mapDispatchToPropsGenerator';

const AppContainer = connect(mapStateToProps('App'), mapDispatchToProps('App'))(App);

export default AppContainer;