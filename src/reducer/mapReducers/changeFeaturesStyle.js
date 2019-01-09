import { Circle as CircleStyle,Fill, Stroke, Style} from 'ol/style.js';


export default function changeFeaturesStyle(state, action){
 
    const {layerName, layerType, colorscale, data} = action  ;

    var Map = Object.assign( Object.create( Object.getPrototypeOf(state)), state);
    if(data!==null) 
        Map.getLayers().forEach(element => {
            
            if(element.get("name")===layerName){
                
                var features = element.getSource().getFeatures();
                var i =0;
                features.forEach(ele =>{
                    i=0;
                    data.forEach(dataEle =>{
                        dataEle.ref.forEach(refEle =>{
                            if(refEle.get('id')===ele.get('id')){
                                console.log(element);
                                if(layerType==="LineString")
                                    var style = new Style({
                                        stroke: new Stroke({
                                            color : colorscale[i],
                                        }),
                                        fill: new Fill(),
                                    });
                                else if(layerType==="Polygon")
                                    var style = new Style({
                                        stroke: new Stroke(),
                                        fill: new Fill({
                                            color : colorscale[i],
                                        }),
                                    });
                                else 
                                    var style = new Style({

                                        image : new CircleStyle({
                                            radius : 10,
                                            fill: new Fill({
                                                color : colorscale[i],
                                            }),
                                            stroke: null,
                                          }),
                                    });
                                ele.setStyle(style);
                            } 
                        });
                        i=(i+1)%colorscale.length;
                    });
                });
            } 
            
        });
      
    return Map;

}