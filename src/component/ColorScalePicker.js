import React, { Component } from "react";

import {Colorscale} from 'react-colorscales';
import ColorscalePicker from 'react-colorscales';
import { DEFAULT_SCALE } from "react-colorscales";
import { Button} from 'antd';

export default class ColorScalePicker extends Component {
    

    constructor(props) {
        super(props);

        const viridisColorscale = ['#fafa6e', '#9cdf7c', '#4abd8c', '#00968e', '#106e7c', '#2a4858'];

        this.onChange = this.onChange.bind(this);
        this.toggleColorscalePicker = this.toggleColorscalePicker.bind(this);

        this.state = {
            showColorscalePicker: false,
            colorscale: viridisColorscale,
        };
    }
    
    toggleColorscalePicker = () => {
        this.setState({ showColorscalePicker: !this.state.showColorscalePicker });
    };


    onChange = colorscale => {
        this.setState({
            colorscale: colorscale
        });
        setTimeout(function() {
            this.props.action(this.state.colorscale);
        }.bind(this), 300);
        
    };


    render() {

        
        const Colorscalepicker =(
                <ColorscalePicker 
                        className="colorScalePickerContainer"  
                        onChange={this.onChange}
                        colorscale={this.state.colorscale}
                        fixSwatches = {true}/>
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