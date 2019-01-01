
import { defaultState} from '../../store'
import importMap from "./importMap";
import deleteMap from "./deleteMap";
import addMapLayer from "./addMapLayer";
import changeLayerStyle from "./changeLayerStyle";

export default function mapReducer(state= defaultState.map, action){
 
  const { type } = action  ;

switch (type) {
    case "IMPORT_MAP":
        return importMap(state,action)
       
    case "DELETE_MAP":
        return deleteMap(state,action)
       
    case "ADD_MAP_LAYER":
        return addMapLayer(state,action.layerName);

    case "CHANGE_STYLE":
        return changeLayerStyle(state,action);

    default:
        return state;
        
}

}