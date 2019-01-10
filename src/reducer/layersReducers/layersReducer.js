
import { defaultState} from '../../store'
import addMapLayerInfo from "./addMapLayerInfo";
import deleteMapLayerInfo from "./deleteMapLayerInfo";
import setSelectedMapLayer from "./setSelectedMapLayer";
import setMapLayerStyleInfo from "./setMapLayerStyleInfo"
export default function layersReducer(state= defaultState.layersTree, action){
 
  const { type } = action  ;

switch (type) {
    case "ADD_MAP_LAYER_INFO":
        return addMapLayerInfo(state,action);
    case "CHANGE_MAP_LAYER_STYLE_INFO":
        return setMapLayerStyleInfo(state,action);
    case "ADD_MAP_TOPOLOGY_LAYER_INFO":
        return addMapLayerInfo(state,action);
    case "DELETE_MAP_LAYER_INFO":
        return deleteMapLayerInfo(state,action);
    case "SET_SELECTED_MAP_LAYER":
        return setSelectedMapLayer(state,action);
    
    default:
        return state;
        
}

}