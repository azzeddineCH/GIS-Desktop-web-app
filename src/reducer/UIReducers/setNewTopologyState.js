import { defaultState} from '../../store'


export default function setNewTopologyState(state= defaultState.newTopologyState, action){
 
    const { showtopo, type } = action  ;

    if(type === "CHANGE_TOPOLOGY_STATE") {
      return  showtopo
    }else{
      return  state
    }

}