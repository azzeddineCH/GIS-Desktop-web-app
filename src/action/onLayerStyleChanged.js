export default function onLayerStyleChanged(layerName, style){
   
    return [{ 
             type : "CHANGE_LAYER_STYLE",
             style,
             layerName,     
            },
            { 
                type : "CHANGE_MAP_LAYER_STYLE_INFO",
                style,
                layerName,     
               },
        
        
        ];

}