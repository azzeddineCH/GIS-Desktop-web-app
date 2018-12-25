import { defaultState} from '../../store'


export default function setNewLayerDialogState(state= defaultState.newLayerDialogState, action){
 
    const { show, type } = action  ;

    if(type === "CHANGE_NEW_LAYER_DIALOG_STATE") {
      return  show
    }else{
      return  state
    }

}