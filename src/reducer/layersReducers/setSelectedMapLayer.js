import MapLayerObject from '../../data/MapLayerObject'
import { element } from 'prop-types';



export default function setSelectedMapLayer(state, action){
 
       const { layerName  } = action  ;

       
       var slectedMapLayer = state.mapLayers.filter( ellement => {
            return (ellement.name == layerName)
        })[0]
        console.log("the selected map layer is "+ slectedMapLayer+"the input was"+ layerName);
        
       return {...state, slectedMapLayer}
  
}
