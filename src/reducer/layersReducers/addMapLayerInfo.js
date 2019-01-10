import MapLayerObject from '../../data/MapLayerObject'



export default function addMapLayerInfo(state, action){
 
       const { layerName, layerType  } = action  ;

    
        let mapLayer =  new MapLayerObject(layerName,layerType)
        var mapLayers = [...state.mapLayers, mapLayer]
        return {
            ...state,
            mapLayers,
          
        }
  
}
