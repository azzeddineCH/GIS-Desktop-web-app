import {combineReducers ,createStore} from 'redux' ;
import dummy_reducer from "./reducer/reducer_example";


/**
 * an object that hold the default state of the app
 */
export const defaultState ={
    dummy_value:{
        message : ""
    }
  };


  /**
   * an object that combine all the created reducers into
   * a one global reducer that will change the state of the store 
   */
const rootReducer = combineReducers({
      dummy_value:dummy_reducer
  });


  /**
   *  a refrence to the app sotore is created by matching 
   *  the state with the reducers object 
   */
const store = createStore(rootReducer,
                          defaultState,
                          /** 
                           * the next line add the redux Chrome extention tp the DevTools
                           * You can see the state of the store at the redux Tab on the right panel
                           */
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store  ;