import React  from 'react';
import { Layout } from 'antd';
import NewLayerDialog from "./NewLayerDialog"
import MapLayerTools from "./MapLayerTools"
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onAddLayerClicked = this.onAddLayerClicked.bind(this)
  }

  onAddLayerClicked(){
  
    this.props.onNewLayerDialogStateChenged(true);

  }

   

  render() {
    const Header = Layout.Header;
    
    return(
      <Header id="header">
      { this.props.store.map ? 
            <div>
                  { this.props.store.layersTree.mapLayers.map(element => {
                    if(element.name == this.props.store.layersTree.slectedMapLayer.name )
                    return(
                      <MapLayerTools
                            disabled={this.props.store.layersTree.slectedMapLayer.name == "sketch" ? true : false}
                            layerName={element.name}
                            map={this.props.store.map}
                            drawType={element.type}
                            onAddLayerClicked={this.onAddLayerClicked}
                      />
                  )})}
                      
                 <NewLayerDialog
                 {...this.props}
                 />
              </div>
       : <br/> 
      }
      </Header>
    );
  }
}
