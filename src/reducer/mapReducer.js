
import { defaultState} from '../store'
import importMap from "./importMap";
import deleteMap from "./deleteMap";

export default function mapReducer(state= defaultState.map, action){
 
  const { type } = action  ;

switch (type) {
    case "IMPORT_MAP":
        return importMap(state,action)
       
    case "DELETE_MAP":
        return deleteMap(state,action)
       

    default:
        return state;
        
}

}