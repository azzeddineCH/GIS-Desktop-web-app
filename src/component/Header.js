import React  from 'react';
import { Layout } from 'antd';
import NewLayerDialog from "./NewLayerDialog"
import MapLayerTools from "./MapLayerTools"
import { Card } from 'antd';
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onAddLayerClicked = this.onAddLayerClicked.bind(this)
    this.onDeleteLayerClicked = this.onDeleteLayerClicked.bind(this)

  }

  onAddLayerClicked(){
    this.props.onNewLayerDialogStateChenged(true);
  }

  onDeleteLayerClicked(){
    this.props.onMapLayerDeleted(this.props.store.layersTree.slectedMapLayer.name);
  }

   

  render() {
    const Header = Layout.Header;
  
    
    return(
      <Header id="header">
            <h2 id="projectTitle">SIGA Project</h2>
      { this.props.store.map ?
              this.props.store.layersTree.mapLayers.map(element => {
                    if(element.name == this.props.store.layersTree.slectedMapLayer.name )
                    return(
                      <MapLayerTools
                            disabled={this.props.store.layersTree.slectedMapLayer.name == "sketch" ? true : false}
                            layerName={element.name}
                            map={this.props.store.map}
                            drawType={element.type}
                            onAddLayerClicked={this.onAddLayerClicked}
                            onDeleteLayerClicked={this.onDeleteLayerClicked}
                      />
                  )})
       : ''
      }
        <NewLayerDialog
                 {...this.props}
        />
      </Header>
    );
  }
}
