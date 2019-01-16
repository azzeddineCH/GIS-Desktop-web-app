import { Circle as CircleStyle,Fill, Stroke, Style} from 'ol/style.js';


export default function changeFeaturesStyle(state, action){
 
    const {layerName, layerType, colorscale, data} = action  ;

    var Map = Object.assign( Object.create( Object.getPrototypeOf(state)), state);

    var fillStyle = Map.getLayers().getArray().filter(element=>{
        return element.getProperties().name == layerName;
    })[0].getStyle();

    var strokeStyle = fillStyle instanceof Style ? fillStyle.getStroke() : null

    if(data!==null) 
        Map.getLayers().forEach(element => {
            
            if(element.get("name")===layerName){
                
                var features = element.getSource().getFeatures();
                var i =0;
                features.forEach(ele =>{
                    i=0;
                    data.forEach(dataEle =>{
                        dataEle.ref.forEach(refEle =>{
                            if(refEle.get('ID')===ele.get('ID')){
                                console.log(element);
                                if(layerType==="LineString"){
                                    //if(strokeStyle instanceof Stroke) strokeStyle.setColor(colorscale[i]);
                                    var style = new Style({
                                        stroke: new Stroke({
                                            color : colorscale[i],
                                            width : strokeStyle.getWidth(),
                                        }),
                                        fill: null,
                                    });
                                }
                                    
                                else if(layerType==="Polygon")
                                    var style = new Style({
                                        stroke: fillStyle instanceof Style ? fillStyle.getStroke() : null,
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