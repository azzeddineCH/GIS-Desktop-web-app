import MapLayerObject from '../../data/MapLayerObject'
import { element } from 'prop-types';



export default function setMapLayerStyleInfo(state, action){
 
       const { style,layerName } = action  ;

       var mapLayers = state.mapLayers.map((ellement)=>{
           if(ellement.name == layerName) ellement.setStyle(style);
           return ellement;
       })

        return {
            ...state,
            mapLayers,
          
        }
  
}
