import { defaultState} from '../store'


/**
 * an example of a redux reducer:
 * @param {*} state : the part of the store state to change, we can pass the default state at the begining of the load 
 * @param {*} action : the action object containing the ID and the info (see the example at @action/action_example.js)
 * 
 * because the actions are broadcasted to all the reducers, we must filter using the action ID
 */

export default function dummy_reducer(state= defaultState.dummy_value, action){
 
  const { type , message } = action  ;
  
  if(type === "DUMMY_ACTION"){
        return  {  message  }
  }else{
       return state;
  }

}