import React  from 'react';

import { Skeleton, Layout , Card} from 'antd';
import MapLayersTree from './MapLayersTree';
import MapLayerFeaturesTree from './MapLayerFeaturesTree';

import { LayerTree } from '@terrestris/react-geo';


import MapTopologyLayersTree from './MapTopologyLayersTree';


export default class LayerBar extends React.Component {

  constructor(props){
    super(props);
    this.handleLayerClick = this.handleLayerClick.bind(this)
    this.renderSkeleton = this.renderSkeleton.bind(this)
  }

  handleLayerClick(selectedKeys, e){
    
    this.props.onSelectedLayerChanged(e.selectedNodes.length > 0 ? e.selectedNodes[0].props.title : "sketch")
    var log= this.props.store.layersTree.slectedMapLayer.type == "default";
    var ll="layer selectionné";
    console.log(ll,log);
  }


  renderSkeleton(size){
    var container = [];
    for (let index = 0; index < size; index++) {
      container.push(
                        <Skeleton
                        key={index}
                        avatar={{ shape: "circle", size: 'small' }}
                        paragraph={false}
                        title={true}
                        active />
      )
    }
    return <div>{container}</div>
  }
 
  render() {
    const Sider  = Layout.Sider;
    const bodyStyle = {
      overflowY: 'scroll',
      height: "33vh",
    }
    return(
      <Sider id='mapEllememts' width="15%">
          <Card 
           bodyStyle={bodyStyle}
           title="Map Layers"
           className="ellementsTree"
           id="mapLayersCard">
            { this.props.store.map ? 
                          <MapLayersTree
                            onLayerClicked={this.handleLayerClick}
                            map={this.props.store.map}/>:
                            this.renderSkeleton(5)
            }
          </Card> 
          <Card 
           title="Layer Features"
           className="ellementsTree"
           id="mapLayerFeaturesCard">
            { this.props.store.map && this.props.store.layersTree.slectedMapLayer.name != "sketch"? 
                          <MapLayerFeaturesTree
                           layer={this.props.store.layersTree.slectedMapLayer}
                           map={this.props.store.map}
                           features={this.props.store.map.getLayers().getArray().filter(element=>{
                                    return element.getProperties().name == this.props.store.layersTree.slectedMapLayer.name
                                    })[0].getSource().getFeatures()}
                        />:  this.renderSkeleton(5)
            }
           </Card> 
           <Card 
           bodyStyle={bodyStyle}
           title="Topology Layers"
           className="ellementsTree"
           id="mapTopologyLayersCard">
            { this.props.store.map ? 
                          <MapTopologyLayersTree
                            onLayerClicked={this.handleLayerClick}
                            map={this.props.store.map}/>:
                            this.renderSkeleton(20)
            }
          </Card> 
      </Sider>
    );
  }
}
