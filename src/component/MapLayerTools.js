import React  from 'react';

import { Button , Icon,Divider} from 'antd';
import { ToggleGroup,DigitizeButton } from "@terrestris/react-geo"
import { ScaleCombo } from '@terrestris/react-geo';
import { Fill, Stroke, Style} from 'ol/style.js';


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
                            disabled={this.props.disabledtopo}
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
                                drawStyle = {this.props.drawStyle}
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
                                drawStyle = {this.props.drawStyle}
                        >
                      <Icon type="edit" />
                            Edit Feature
                      </DigitizeButton>
                      <DigitizeButton
                                disabled={this.props.disabledtopo}
                                className = "hidedButton"
                                name="delete"
                                digitizeLayerName={this.props.layerName}
                                map={this.props.map}
                                editType="Delete"
                                type="dashed" 
                                drawStyle = {this.props.drawStyle}
                        >
                            <Icon type="delete" />
                              Delete Feature
                      </DigitizeButton>
                      
                      <Button
                            className = "hidedButton"
                            name="addtopology"
                            type="dashed"    
                            disabled={this.props.disabled}
                            onClick={this.props.onAddTopologyClicked}>
                      <Icon type="build" />
                            Add New Topology
                        </Button>
                        
                  </ToggleGroup>
            
            );
        }
    }
