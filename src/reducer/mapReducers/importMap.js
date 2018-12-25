import { defaultState} from '../../store'
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {getCenter} from 'ol/extent.js';
import ImageLayer from 'ol/layer/Image.js';
import Projection from 'ol/proj/Projection.js';
import Static from 'ol/source/ImageStatic.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';

export default function importMap(state= defaultState.map, action){
 
  const { path } = action  ;


    let extent = [0, 0, 1024, 968];
    let projection = new Projection({
      code: 'xkcd-image',
      units: 'pixels',
      extent: extent
    });
    let map = new Map({
        layers: [
          new ImageLayer({
            name: 'map',
            source: new Static({
              url: path,
              projection: projection,
              imageExtent: extent
            })
          }),
          new VectorLayer({
            name: 'sketch',
            source: new VectorSource({}),
        })
        ],
        target: 'map',
        view: new View({
          projection: projection,
          center: getCenter(extent),
          zoom: 4,
          maxZoom: 8
        })
      });
    return   map  
 

}