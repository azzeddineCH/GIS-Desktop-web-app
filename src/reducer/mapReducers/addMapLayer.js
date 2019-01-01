import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import OlCollection from 'ol/Collection';
import { Style, Stroke, Fill } from 'ol/style';

export default function addMapLayer(state,name){
 
    
     var layer = new VectorLayer({
        name,
        source: new VectorSource({
            features: new OlCollection(),
        }),
        style: new Style({
            stroke: new Stroke(),
            fill: new Fill(),
          }),
    });

    var newMap = Object.assign( Object.create( Object.getPrototypeOf(state)), state);
    newMap.addLayer(layer);
    console.log(layer.getStyle());
    return newMap ;

}
