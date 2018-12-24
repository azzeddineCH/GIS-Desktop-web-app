import {combineReducers ,createStore} from 'redux' ;
import mapReducer from "./reducer/mapReducer";


/**
 * an object that hold the default state of the app
 */
export const defaultState ={
   map: null,
  };


  /**
   * an object that combine all the created reducers into
   * a one global reducer that will change the state of the store 
   */
const rootReducer = combineReducers({
     map: mapReducer,
  
  
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