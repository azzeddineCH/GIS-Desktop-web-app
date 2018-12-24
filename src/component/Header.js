import React  from 'react';
import { Layout } from 'antd';
import { Button , Icon} from 'antd';
import { ToggleGroup,DigitizeButton } from "@terrestris/react-geo"

export default class Header extends React.Component {


  handleClick(e){

    // show the dialog box to add layer 
    // trigger the action to add a layer with name and type

  }

  render() {
    const Header = Layout.Header;
    return(
      <Header id="header">
      { this.props.store.map ? 
            
                <ToggleGroup>
                      <Button
                            className = "hidedButton"
                            name="addLayer"
                            type="dashed"  
                            onClick={this.handleClick} 
                        >
                        <Icon type="diff" />
                            Add Layer
                      </Button>  
                      <DigitizeButton
                                className = "hidedButton"
                                name="drawPolygon"
                                map={this.props.store.map}
                                drawType="Polygon"
                                type="dashed" 
                            
                        >
                           <Icon type="radar-chart" />
                            Draw
                      </DigitizeButton>
                      <DigitizeButton
                                className = "hidedButton"
                                name="edit"
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
                                map={this.props.store.map}
                                type="dashed" 
                        >
                           <Icon type="drag" />
                              Drag
                      </DigitizeButton>
                </ToggleGroup>    
       : <br/> 
      }
      </Header>
    );
  }
}
