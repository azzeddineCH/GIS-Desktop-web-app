

export default function deleteMapLayerInfo(state, action){
 
       const { layerName  } = action  ;
       
        
        var mapLayers = state.mapLayers.filter((ele) => ele.name != layerName)

        
        return {
            ...state,
            mapLayers,
          
        }
  
}
