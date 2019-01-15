import {combineReducers ,createStore, applyMiddleware, compose} from 'redux' ;
import mapReducer from "./reducer/mapReducers/mapReducer";
import layersReducer from "./reducer/layersReducers/layersReducer";
import setNewLayerDialogState from "./reducer/UIReducers/setNewLayerDialogState";
import MapLayerObject from './data/MapLayerObject'
import multi from 'redux-multi'

 /* an object that hold the default state of the app
 */

const defaultLayer = new MapLayerObject("sketch","Polygon")

const featuresProperties = defaultLayer.getFeatureProperties()

const currentFeature = defaultLayer.getCurrentFeature()

const Feat =defaultLayer.getFeatures();

export const defaultState ={
   map: null,
   layersTree:{
      mapLayers:[defaultLayer],
      slectedMapLayer: defaultLayer
   },
   newLayerDialogState: false,
   featurePropertiesObject:featuresProperties,
   currentFeature: currentFeature,
   features:Feat,
  };


  /**
   * an object that combine all the created reducers into
   * a one global reducer that will change the state of the store 
   */
const rootReducer = combineReducers({
     map: mapReducer,
     layersTree: layersReducer,
     newLayerDialogState: setNewLayerDialogState,
  
  });


  /**
   *  a refrence to the app sotore is created by matching 
   *  the state with the reducers object 
   */

const store = createStore(rootReducer,
                          defaultState,
                          compose(applyMiddleware(multi))
                          /** 
                           * the next line add the redux Chrome extention tp the DevTools
                           * You can see the state of the store at the redux Tab on the right panel
                           */);
export default store  ;