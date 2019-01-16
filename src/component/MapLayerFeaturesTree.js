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
              featureStyle = {this.props.map.getLayers().getArray().filter(ele=>{
                return(ele.get("name")==this.props.layer.name)
              })[0].getStyle()}
              attributeBlacklist={['id']}
              showHeader={false}
              features={this.props.features}
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
