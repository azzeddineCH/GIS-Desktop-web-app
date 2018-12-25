import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';

export default function addMapLayer(state,name){
 
    
     var vector = new VectorLayer({
        name,
        source: new VectorSource({}),
    });

    var newMap = Object.assign( Object.create( Object.getPrototypeOf(state)), state)
    newMap.addLayer(vector)
    return newMap 

}
