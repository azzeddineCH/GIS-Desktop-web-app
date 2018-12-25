
export default function onMapLayerAdded(layerName,layerType){
   
    return [{ 
                type : "ADD_MAP_LAYER_INFO",
                layerName,
                layerType
            },
            { 
                type : "ADD_MAP_LAYER",
                layerName,
            }]

}