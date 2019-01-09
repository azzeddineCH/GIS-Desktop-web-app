
import { defaultState} from '../../store'
import importMap from "./importMap";
import deleteMap from "./deleteMap";
import addMapLayer from "./addMapLayer";
import deleteMapLayer from "./deleteMapLayer";
import changeLayerStyle from "./changeLayerStyle";
import changeFeaturesStyle from './changeFeaturesStyle';


export default function mapReducer(state= defaultState.map, action){
 
  const { type } = action  ;

switch (type) {
    case "IMPORT_MAP":
        return importMap(state,action)
       
    case "DELETE_MAP":
        return deleteMap(state,action)
       
    case "ADD_MAP_LAYER":
        return addMapLayer(state,action);

    case "DELETE_MAP_LAYER":
        return deleteMapLayer(state,action);

    case "CHANGE_LAYER_STYLE":
        return changeLayerStyle(state,action);

    case "CHANGE_FEATURES_STYLE":
        return changeFeaturesStyle(state,action);

    default:
        return state;
        
}

}