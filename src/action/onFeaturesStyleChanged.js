export default function onLayerStyleChanged(layerName, layerType, colorscale, data){
   
    return { 
             type : "CHANGE_FEATURES_STYLE",
             colorscale,
             data,
             layerName,  
             layerType,   
            };

}