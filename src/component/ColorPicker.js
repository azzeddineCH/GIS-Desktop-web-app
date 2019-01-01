import React from 'react';
import { Popover,Button} from 'antd';
import 'antd/dist/antd.css';
import { BlockPicker } from 'react-color';

export default class ColorPicker extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            background: "rgba(0, 0, 255, 0.1)",
            visible: false,
          };
    }



    handleVisibleChange = (visible) => {
        this.setState({ visible });
    }
    
    handleChangeComplete = (color, event) => {
        this.setState({ 
            background: color.hex,
        });
        this.props.action(color);
        setTimeout(function() {
            this.setState({ 
                //visible: false,
            });
        }.bind(this), 1500);

    };
    

  render() {
        const ColorPicker = (
            <BlockPicker 
                triangle="hide" 
                color={this.state.background} 
                onChangeComplete={ this.handleChangeComplete}/>
        );
    return(
        <Popover 
                content={ColorPicker} 
                trigger="click"
                visible={this.state.visible && !this.props.disabled}
                onVisibleChange={this.handleVisibleChange}>
            <Button type="primary" 
                    disabled={this.props.disabled}
                    style={{
                        backgroundColor:this.state.background, 
                        border:this.state.background}}>
            </Button>
        </Popover>
              
    );
  }

}
