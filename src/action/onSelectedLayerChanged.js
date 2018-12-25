
export default function onSelectedLayerChanged(layerName){
   
    return { 
                type : "SET_SELECTED_MAP_LAYER",
                layerName,
            }

}