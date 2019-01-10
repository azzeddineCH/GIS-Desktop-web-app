import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import OlCollection from 'ol/Collection';

export default function addMapLayer(state,action){

    const name = action.layerName

     var layer = new VectorLayer({
        name,
        source: new VectorSource({
            features: new OlCollection(),
        }),
    });

    var newMap = Object.assign( Object.create( Object.getPrototypeOf(state)), state);
    newMap.addLayer(layer);
    
    return newMap ;

}
