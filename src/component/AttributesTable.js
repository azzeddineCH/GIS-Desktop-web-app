import React  from 'react';
import { FeatureGrid } from "@terrestris/react-geo";
import { Input} from 'antd';



export default class AttributesTable extends React.Component {
    constructor(props) {
      super(props);
      this.getColumnDefs = this.getColumnDefs.bind(this);
  
    }

    

    getMeasure(feature){
        var geo =feature.getGeometry()

        if (geo.getType()==='LineString') return feature.getGeometry().getLength();
        else{
            if(geo.getType()==='Polygon') return feature.getGeometry().getArea();
            else return 0;
        }
    }
    
   
    getColumnDefs(){
        
        var mapFeatures = this.props.map.getLayers().getArray().filter(element=>{
            return element.getProperties().name == this.props.layer.name
        })[0].getSource().getFeatures()

        var columns = mapFeatures[0].getKeys().map((element)=>{
          
                return{
                    key: element,
                    title:element,
                    render: val => (typeof val == "string") ? <span>{val}</span> : <span>{Math.round(val)}</span>
                }   
        })
        
        var result = {};
        for (var i=0; i<columns.length; i++) {
              result[columns[i].key] = {
                  title:columns[i].title,
                  render:columns[i].render};
            }
        
        return result
    }

    render() {  
    
        return(
                <div>
                    {this.props.map.getLayers().getArray().filter(element=>{
                                 return element.getProperties().name == this.props.layer.name
                             })[0].getSource().getFeatures().length>0 ?                  
                       <FeatureGrid
                            features= {this.props.map.getLayers().getArray().filter(element=>{
                                                 return element.getProperties().name == this.props.layer.name
                                        })[0].getSource().getFeatures()}
                            map={this.props.map}
                            zoomToExtent={false}
                            selectable={false}
                            layerName ={this.props.layer.name}
                            bordered
                            columnDefs={this.getColumnDefs()}
                    
                    />:
                ""}

                </div>
              )
     }
}