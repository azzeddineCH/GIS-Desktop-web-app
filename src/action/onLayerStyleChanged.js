export default function onLayerStyleChanged(layerName, style){
   
    return { 
             type : "CHANGE_LAYER_STYLE",
             style,
             layerName,     
            };

}