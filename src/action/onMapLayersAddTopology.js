
export default function onMapLayersAddTopology(layerName,layerType){
   
    return { 
                type : "ADD_MAP_LAYER_INFO",
                layerName,
                layerType
            }
           

}