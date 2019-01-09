import React  from 'react';

import { Button , Icon,Divider} from 'antd';
import { ToggleGroup,DigitizeButton } from "@terrestris/react-geo"



export default class MapLayerTools extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {    
    return(
                    <ToggleGroup
                       className="MapLayerTools">
                      <Button
                            className = "hidedButton"
                            name="addLayer"
                            type="dashed"    
                            onClick={this.props.onAddLayerClicked}>
                      <Icon type="plus-circle" />
                            Add Vector Layer
                      </Button>  
                      <Button
                            disabled={this.props.disabled}
                            className = "hidedButton"
                            name="deleteLayer"
                            type="dashed"    
                            onClick={this.props.onDeleteLayerClicked}>
                     <Icon type="minus-circle" />
                            Delete Vector Layer
                      </Button>  
                      <Divider type="vertical" />
                      <DigitizeButton
                                disabled={this.props.disabled}
                                className = "hidedButton"
                                name="drawPolygon"
                                digitizeLayerName={this.props.layerName}
                                map={this.props.map}
                                drawType={this.props.drawType}
                                type="dashed"
                        >
                           <Icon type="radar-chart" />
                            Draw {" "+this.props.drawType}
                      </DigitizeButton>
                      <DigitizeButton
                                disabled={this.props.disabled}
                                className = "hidedButton"
                                name="edit"
                                digitizeLayerName={this.props.layerName}
                                map={this.props.map}
                                editType="Edit"
                                type="dashed" 
                        >
                      <Icon type="edit" />
                            Edit Feature
                      </DigitizeButton>
                      <DigitizeButton
                                disabled={this.props.disabled}
                                className = "hidedButton"
                                name="delete"
                                digitizeLayerName={this.props.layerName}
                                map={this.props.map}
                                editType="Delete"
                                type="dashed" 
                        >
                            <Icon type="delete" />
                              Delete Feature
                      </DigitizeButton>  
                      <Divider type="vertical" />
                      <Button
                            className = "hidedButton"
                            name="addLayer"
                            type="dashed">
                        <Icon type="close-circle" />
                           Delete Project
                      </Button>  
                </ToggleGroup>
            );
        }
    }
