import React  from 'react';
import { FeatureGrid } from '@terrestris/react-geo';

export default class MapLayerFeaturesTree extends React.Component {

  constructor(props){
    super(props);
    
  }
 
  render() { 
    
   
    return(
        <div>
            <FeatureGrid
              size={"small"}
              showHeader={false}
              features={this.props.features.map((feature,index)=>{
                feature.set("ID",index);
                return feature
                      })
              }
              map={this.props.map}
              scroll={{ x: 0, y: 300 }}
              pagination={false}
              layerName={this.props.layer.name}
              zoomToExtent={true}
              columnDefs={
                {
                  "ID" : {
                  title: 'Features',
                  render: val => {
                    return <span>Feature-{val}</span>
                   },
                 },
                }
              }
            />
        </div>
        );
  }
}
