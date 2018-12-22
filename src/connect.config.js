import {connect} from 'react-redux' ;
import {bindActionCreators} from 'redux' 
import dummy_action from './action/action_example';
import App from "./component/App";



/**
 * map the app actions to components:
 * the App and its child will have access to action via props
 */
function mapDispatchToProps(dispatcher){
    return bindActionCreators({ 
        dummy_action
    },dispatcher);
}

/**
 * map the app state to components:
 * the App and its child will react to store changes
 */
function mapStateToProps(state){
  return {store: state}
}


/**
 * connecting the app main component to actions and state
 */
const Layout =  connect(mapStateToProps,mapDispatchToProps)(App) ;
export default Layout ;