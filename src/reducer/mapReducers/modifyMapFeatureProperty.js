import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import OlCollection from 'ol/Collection';
import { log } from 'util';

export default function modifyMapFeatureProperty(state,action){

    const {layerName, columnData } = action;
    const { columnName,columnNewValues} = columnData

    console.log("updating the map layer named "+ layerName +"features name "+columnName+" default value "+columnNewValues);
    
    var updatedMap = Object.assign( Object.create( Object.getPrototypeOf(state)), state);

    updatedMap.getLayers().getArray().filter(element=>{
        return element.getProperties().name == layerName;
    })[0].getSource().getFeatures().forEach(feature => {
        
        feature.set(columnName,columnNewValues[feature.get("ID")]);
    });;

    return updatedMap ;

}
