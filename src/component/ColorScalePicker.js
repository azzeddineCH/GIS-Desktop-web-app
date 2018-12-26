import React, { Component } from "react";

import {Colorscale} from 'react-colorscales';
import ColorscalePicker from 'react-colorscales';
import { DEFAULT_SCALE } from "react-colorscales";
import { Button} from 'antd';

export default class ColorScalePicker extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.toggleColorscalePicker = this.toggleColorscalePicker.bind(this);

        this.state = {
            showColorscalePicker: false,
            colorscale: DEFAULT_SCALE,
        };
    }
    
    toggleColorscalePicker = () => {
        this.setState({ showColorscalePicker: !this.state.showColorscalePicker });
    };


    onChange = colorscale => {
        this.setState({
            colorscale: colorscale
        });
    };


    render() {
        const Colorscalepicker =(
                <ColorscalePicker 
                        className="colorScalePickerContainer"  
                        onChange={this.onChange}
                        colorscale={this.state.colorscale}/>
        );
        return (
            <div>            
                <Button style={{
                            backgroundColor:this.state.background, 
                            border:this.state.background}}
                            className="toggleButton flex_div"
                            onClick={this.toggleColorscalePicker}>
                    <Colorscale
                        colorscale={this.state.colorscale}
                        onClick={() => {}}/>
                </Button>
                {this.state.showColorscalePicker && Colorscalepicker}
            </div>
            
        );
    }
}