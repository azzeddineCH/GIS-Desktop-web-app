export default function onLayerStyleChanged(layerName, style){
   
    return { 
             type : "CHANGE_STYLE",
             style,
             layerName,     
            };

}