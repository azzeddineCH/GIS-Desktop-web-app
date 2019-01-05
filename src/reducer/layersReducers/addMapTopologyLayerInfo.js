import MapLayerObject from '../../data/MapLayerObject';
import jsts from 'jsts';
import Point  from 'ol/geom/Point';
import LineString from 'ol/geom/LineString';
import Polygon from 'ol/geom/Polygon';
export default function addMapTopologyLayerInfo(state, action){
 
       const { TopologyName,Firstname,FirstId,Secondname,SecondId } = action  ;
       var features=[];
    var tab;
    tab = this.props.store.map.getLayers().getArray().filter(element=>{return (element.get('name')==Firstname)
    })[0].getSource().getFeatures().map((feature,index)=>{
    feature.set("ID",index);
    return feature
          });
    tab.forEach(function (e){
      if (e.get("ID") == FirstId) {features.push(e);}
   });

    tab = this.props.store.map.getLayers().getArray().filter(element=>{return (element.get('name')==Secondname)
    })[0].getSource().getFeatures().map((feature,index)=>{
    feature.set("ID",index);
    return feature
          });
    tab.forEach(function (e){
      if (e.get("ID") == SecondId) {features.push(e);}
   });
       
        var rslt="";
        const parser = new jsts.io.OL3Parser();
        const geom = parser.read(features[0].getGeometry());
        const otherGeom = parser.read(features[1].getGeometry());
        const intersectGeom = jsts.operation.overlay.OverlayOp.intersection(geom, otherGeom);
            if (intersectGeom instanceof Point)
                { 
                    rslt="Point";
                }

           else {
                if  (intersectGeom instanceof LineString)
                    {
                        rslt="LineString";
                    }
               else 
                   {
                   if (intersectGeom instanceof Polygon)
                   {rslt="Polygon";}
                   }
                }
      if (rslt != "")
       { let mapLayer =  new MapLayerObject(TopologyName,rslt);
        var mapLayers = [...state.mapLayers, mapLayer];
       }
       else 
       {
         var mapLayers = [...state.mapLayers];
       }
        return {
            ...state,
            mapLayers,
          
        }
  
}
