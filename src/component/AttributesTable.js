import React  from 'react';
import { FeatureGrid } from "@terrestris/react-geo";
import { Input} from 'antd';



export default class AttributesTable extends React.Component {
    constructor(props) {
      super(props);
      this.AttributesTable=props.featuresProperties;
    }

    addProperty(key,value){
        this.AttributesTable[key]=value;
    }

    getMeasure(feature){
        var geo =feature.getGeometry()

        if (geo.getType()==='LineString') return feature.getGeometry().getLength();
        else{
            if(geo.getType()==='Polygon') return feature.getGeometry().getArea();
            else return 0;
        }
    }
    
    getFeatures(){
       const features= this.props.map.getLayers().getArray().filter(element=>{
           console.log(element.getProperties().name)
            return element.getProperties().name == this.props.layer.name
        })[0].getSource().getFeatures()
        
        var id=1;  
        const newFeatures =features.map((feature)=>{
            this.addProperty('id',id)
            this.addProperty('Nom','Nom'+id)
            //this.addProperty('Measure',this.getMeasure(feature))
            feature.setProperties(this.AttributesTable);
            id++

            return feature
        })
        return newFeatures
    }
    
    modifyFeature(feature,columnName,newValue){
        this.addProperty(columnName,newValue)
        feature.setProperties(this.AttributesTable);
    }

    getColumnDefs(){

  
        var columns = this.getFeatures()[0].getKeys().map((element)=>{
            if (element=='id'|| element=='Measure'){
                return{
                    key: element,
                    title:element,
                    render:val => Math.round(val)
                }
            }
            else  return{
                    key: element,
                    title:element,
                    render:text=> <Input
                        defaultValue={text}
                        style={{ width: '90%', marginRight: '3%' }}
                    />
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
                    {this.getFeatures().length>0 ?                  
                       <FeatureGrid
                        features= {this.getFeatures()}
                        map={this.props.map}
                        zoomToExtent={true}
                        selectable={true}
                        layerName ={this.props.layer.name}
                        columnDefs={this.getColumnDefs()}
                    />:
                ""}

                </div>
              )
     }
}