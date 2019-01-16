import React from 'react';
import { Checkbox,InputNumber} from 'antd';
import 'antd/dist/antd.css';
import ColorPicker from "./ColorPicker";
import {Stroke, Style} from 'ol/style.js';

export default class BorderStyler extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            disabled : true,
            bordersize: 0,
            borderdash: 0,
            bordergap:0,
            bordercolor:null,
        };
        this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
        this.onChangeDash = this.onChangeDash.bind(this);
        this.onChangeGap = this.onChangeGap.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onChangeColor = this.onChangeColor.bind(this);
    }
    
    onChangeCheckBox(e) {
        //const disabled = e.target.checked;
        this.setState({
            disabled : !e.target.checked,
        });
        console.log(`checked = ${e.target.checked}`);
        if(!e.target.checked){
            var borderStyle = null;
            this.props.action(borderStyle);
        }
    }

    onChangeSize(value) {
        console.log('Size changed', value);
        this.setState({
            bordersize:value,
        });
        
        setTimeout(function() {
            var borderStyle = new Stroke({
                    color: this.state.bordercolor,
                    width: this.state.bordersize,
                    lineDash:[this.state.borderdash,this.state.bordergap],
            });
            this.props.action(borderStyle);
        }.bind(this), 300);
    }

    onChangeDash(value) {
        console.log('Dash changed', value);
        this.setState({
            borderdash:value,
        });
        
        setTimeout(function() {
            var borderStyle = new Stroke({
                    color: this.state.bordercolor,
                    width: this.state.bordersize,
                    lineDash:[this.state.borderdash,this.state.bordergap],
            });
            this.props.action(borderStyle);
        }.bind(this), 300);
    }

    onChangeGap(value) {
        console.log('Gap changed', value);
        this.setState({
            bordergap:value,
        });
        
        setTimeout(function() {
            var borderStyle = new Stroke({
                    color: this.state.bordercolor,
                    width: this.state.bordersize,
                    lineDash:[this.state.borderdash,this.state.bordergap],
            });
            this.props.action(borderStyle);
        }.bind(this), 300);
    }

    onChangeColor(value){
        this.setState({
            bordercolor:value.hex,
        });
        
        setTimeout(function() {
            var borderStyle = new Stroke({
                    color: this.state.bordercolor,
                    width: this.state.bordersize,
                    lineDash:[this.state.borderdash,this.state.bordergap],
            });
            this.props.action(borderStyle);
        }.bind(this), 300);
    }

  
  render() {

    const colors = (
        <ColorPicker  
        disabled = {this.state.disabled}
        action = {this.onChangeColor}/>
    );

    return(    
        <div  className="flex_div" style={{margin:20}}>
            <div className="flex_div">
                <Checkbox 
                        onChange={this.onChangeCheckBox}>
                Borders</Checkbox>
                {this.props.store.layersTree.slectedMapLayer.type=="LineString" ? null : colors }

            </div> 
            <div>Size :</div>
            <InputNumber min={0} 
                    defaultValue={0} 
                    onChange={this.onChangeSize} 
                    disabled={this.state.disabled}
                    style={{width:60}} />
            <div>Dash :</div>
            <InputNumber min={0} 
                    defaultValue={0} 
                    onChange={this.onChangeDash} 
                    disabled={this.state.disabled}
                    style={{width:60}}/>
            <div>Gap :</div>
            <InputNumber min={0} 
                    defaultValue={0} 
                    onChange={this.onChangeGap} 
                    disabled={this.state.disabled}
                    style={{width:60}}/>
        </div> 
         
    );
  }

}
