export default function onAttributeTableColumnAdded(layerName, columnData){
   
    return { 
             type : "ADD_MAP_FEATURE_PROPERTY",
             layerName,
             columnData,
            };

}