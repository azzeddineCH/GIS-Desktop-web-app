import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import OlCollection from 'ol/Collection';
import * as jsts from 'jsts';
import OL3Parser from 'jsts/org/locationtech/jts/io/OL3Parser'
import Point  from 'ol/geom/Point';
import LineString from 'ol/geom/LineString';
import LinearRing from 'ol/geom/LinearRing';
import MultiPoint from 'ol/geom/MultiPoint';
import MultiLineString from 'ol/geom/MultiLineString';
import MultiPolygon from 'ol/geom/MultiPolygon';
import GeometryCollection from 'ol/geom/GeometryCollection';
import Polygon from 'ol/geom/Polygon';
import Feature from 'ol/Feature'
import { message} from 'antd';
import * as ol from 'ol';
import  OverlayOp from 'jsts/org/locationtech/jts/operation/overlay/OverlayOp'
import GeometryFactory from 'jsts/org/locationtech/jts/geom/GeometryFactory';
export default function layersintersection(state,TopologyName,Firstname,FirstId,Secondname,SecondId){
    var newMap = Object.assign( Object.create( Object.getPrototypeOf(state)), state);
    var features=[];
    var tab;
    var t;
    console.log(FirstId);
    console.log(SecondId);
    newMap.getLayers().getArray().forEach(function (e){
        if (e.get("name") == Firstname) {tab=e;}
     });
     t = tab.getSource().getFeatures().map((feature,index)=>{
    feature.set("ID",index);
    return feature
          });
    t.forEach(function (e){
      if (e.get("ID") == FirstId) {features.push(e);}
   });
    
    tab = newMap.getLayers().getArray().filter(element=>{return (element.get('name')== Secondname)
    })[0].getSource().getFeatures().map((feature,index)=>{
    feature.set("ID",index);
    return feature
          });
    tab.forEach(function (e){
      if (e.get("ID") == SecondId) {features.push(e);}
   });
   var bool='false';
   if (features[0].getGeometry() instanceof Point)  {bool='true';}
   console.log(features[0].getGeometry().getType(),features[1].getGeometry().getType(),bool);
        var newFeature = null;
        var geo= new GeometryFactory();
        const parser = new OL3Parser(geo,ol);
        parser.inject(Point,LineString,LinearRing,Polygon, MultiPoint, MultiLineString, MultiPolygon, GeometryCollection);
        const geom = parser.read(features[0].getGeometry());
        const otherGeom = parser.read(features[1].getGeometry());
        newFeature = features[0].clone();
        const intersectGeom = OverlayOp.intersection(geom, otherGeom);
       
         
        if (intersectGeom.getCoordinate()==null){
            message.error('intersection result is empty'); 
        }
        else{
            newFeature.setGeometry(parser.write(intersectGeom));
            var layer = new VectorLayer({
            TopologyName,
            source: new VectorSource({
                    features: [newFeature]
                }),
            });
            layer.set("name",TopologyName);
            layer.set("toponame","topology");
            newMap.addLayer(layer)
        }

       
       return newMap 

}
