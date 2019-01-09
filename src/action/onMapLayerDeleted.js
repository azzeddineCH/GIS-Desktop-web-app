
export default function onMapLayerDeleted(layerName){
   
    return [{ 
                type : "DELETE_MAP_LAYER_INFO",
                layerName,
            },
            { 
                type : "SET_SELECTED_MAP_LAYER",
                layerName:"sketch",
            },
            { 
                type : "DELETE_MAP_LAYER",
                layerName,
            },]

}