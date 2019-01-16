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
import onNewTopologyChanged from './action/onNewTopologyChanged';
import onMapLayersIntersect from './action/onMapLayersIntersect';
import onMapTopologyLayerAdded from './action/onMapTopologyLayerAdded';
import App from "./component/App";
import onMapLayersDiff from './action/onMapLayersDiff';
import onMapLayersSemiDiff from './action/onMapLayersSemiDiff';
import onMapLayersUnion from './action/onMapLayersUnion';
import onMapLayersAddTopology from  './action/onMapLayersAddTopology';
import onAttributeTableColumnAdded from  './action/onAttributeTableColumnAdded';
import onAttributeTableColumnModified from  './action/onAttributeTableColumnModified';
import onAttributeTableColumnDeleted from  './action/onAttributeTableColumnDeleted';


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
        onSelectedLayerChanged,
        onNewTopologyChanged,
        onMapTopologyLayerAdded,
        onMapLayersIntersect,
        onMapLayersDiff,
        onMapLayersSemiDiff,
        onMapLayersUnion,
        onMapLayerDeleted,
        onSelectedLayerChanged,
        onLayerStyleChanged,
        onFeaturesStyleChanged,
        onMapLayersAddTopology,
        onAttributeTableColumnAdded,
        onAttributeTableColumnModified,
        onAttributeTableColumnDeleted
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