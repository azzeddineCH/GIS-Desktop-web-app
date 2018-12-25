import React  from 'react';
import { Layout } from 'antd';
import { Button , Icon} from 'antd';
import { ToggleGroup,DigitizeButton } from "@terrestris/react-geo"
import NewLayerDialog from "./NewLayerDialog"
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
                <ToggleGroup>
                      <Button
                            className = "hidedButton"
                            name="addLayer"
                            type="dashed"  
                            map={this.props.store.map}
                            onClick={this.onAddLayerClicked} 
                        >
                        <Icon type="diff" />
                            Add Layer
                      </Button>  
                      <DigitizeButton
                                className = "hidedButton"
                                name="drawPolygon"
                                digitizeLayerName={this.props.store.layersTree.slectedMapLayer.name}
                                map={this.props.store.map}
                                drawType={this.props.store.layersTree.slectedMapLayer.type}
                                type="dashed" 
                            
                        >
                           <Icon type="radar-chart" />
                            Draw
                      </DigitizeButton>
                      <DigitizeButton
                                className = "hidedButton"
                                name="edit"
                                digitizeLayerName={this.props.store.layersTree.slectedMapLayer.name}
                                map={this.props.store.map}
                                editType="Edit"
                                type="dashed" 
                        >
                           <Icon type="edit" />
                            Edit
                      </DigitizeButton>
                      <DigitizeButton
                                className = "hidedButton"
                                name="delete"
                                digitizeLayerName={this.props.store.layersTree.slectedMapLayer.name}
                                map={this.props.store.map}
                                editType="Delete"
                                type="dashed" 
                        >
                            <Icon type="delete" />
                              Delete
                      </DigitizeButton>
                      <DigitizeButton
                                className = "hidedButton"
                                name="drag"
                                digitizeLayerName={this.props.store.layersTree.slectedMapLayer.name}
                                map={this.props.store.map}
                                type="dashed" 
                        >
                           <Icon type="drag" />
                              Drag
                      </DigitizeButton>
                </ToggleGroup>
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
