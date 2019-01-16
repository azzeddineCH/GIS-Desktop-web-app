export default function deleteMapFeatureProperty(state,action){

    const {layerName, columnName } = action;

    console.log("updating the map layer named "+ layerName +"features name "+columnName);
    
    var updatedMap = Object.assign( Object.create( Object.getPrototypeOf(state)), state);

    updatedMap.getLayers().getArray().filter(element=>{
        return element.getProperties().name == layerName;
    })[0].getSource().getFeatures().forEach(feature => {
        
        feature.unset(columnName);
    });;

    return updatedMap ;

}
