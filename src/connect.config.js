import {connect} from 'react-redux' ;
import {bindActionCreators} from 'redux' 
import onMapImported from './action/onMapImported';
import onMapDeleted from './action/onMapDeleted';
import onNewLayerDialogStateChenged from './action/onNewLayerDialogStateChenged';
import onMapLayerAdded from './action/onMapLayerAdded';
import onMapLayerDeleted from './action/onMapLayerDeleted';
import onSelectedLayerChanged from './action/onSelectedLayerChanged';
import onLayerStyleChanged from './action/onLayerStyleChanged';
import onFeaturesStyleChanged from './action/onFeaturesStyleChanged';
import App from "./component/App";



/**
 * map the app actions to components:
 * the App and its child will have access to action via props
 */
function mapDispatchToProps(dispatcher){
    return bindActionCreators({ 
        onMapImported,
        onMapDeleted,
        onNewLayerDialogStateChenged,
        onMapLayerAdded,
        onMapLayerDeleted,
        onSelectedLayerChanged,
        onLayerStyleChanged,
        onFeaturesStyleChanged,
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