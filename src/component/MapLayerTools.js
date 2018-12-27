import React  from 'react';
import { Layout } from 'antd';
import { Button , Icon} from 'antd';
import { ToggleGroup,DigitizeButton } from "@terrestris/react-geo"



export default class MapLayerTools extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {    
    return(
                    <ToggleGroup>
                      <Button
                            className = "hidedButton"
                            name="addLayer"
                            type="dashed"    
                            onClick={this.props.onAddLayerClicked}>
                      <Icon type="diff"/>
                            Add Layer
                      </Button>  
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
                            Draw
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
                            Edit
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
                              Delete
                      </DigitizeButton>
                </ToggleGroup>
            );
        }
    }
