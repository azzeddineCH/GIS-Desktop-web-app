export default function onAttributeTableColumnModified(layerName, columnData){
   
    return { 
             type : "MODIFY_MAP_FEATURE_PROPERTY",
             layerName,
             columnData,
            };

}