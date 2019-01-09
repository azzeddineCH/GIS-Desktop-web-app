
export default function onMapTopologyLayerAdded(layerName,layerType){
   
    return { 
                type : "ADD_MAP_TOPOLOGY_LAYER_INFO",
                layerName,
                layerType
            }
            

}