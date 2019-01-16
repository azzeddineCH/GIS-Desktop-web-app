export default function onAttributeTableColumnDeleted(layerName, columnName){
   
    return { 
             type : "DELETE_MAP_FEATURE_PROPERTY",
             layerName,
             columnName,
            };

}