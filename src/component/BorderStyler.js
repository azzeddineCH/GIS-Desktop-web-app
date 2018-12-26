import React from 'react';
import { Checkbox,InputNumber} from 'antd';
import 'antd/dist/antd.css';
import ColorPicker from "./ColorPicker";

export default class BorderStyler extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            disabled : true,
        };
        this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
    }
    
    onChangeCheckBox(e) {
        //const disabled = e.target.checked;
        this.setState({
            disabled : !e.target.checked,
        });
        console.log(`checked = ${e.target.checked}`);
    }

    onChangeSize(value) {
        console.log('Size changed', value);
    }

    onChangeDash(value) {
        console.log('Dash changed', value);
    }

    onChangeGap(value) {
        console.log('Gap changed', value);
    }
  
  render() {

    return(    
        <div  className="flex_div" style={{margin:20}}>
            <div className="flex_div">
                <Checkbox 
                        onChange={this.onChangeCheckBox}>
                Borders</Checkbox>
                <ColorPicker  disabled = {this.state.disabled}/>
            </div> 
            <div>Size :</div>
            <InputNumber min={1} 
                    defaultValue={1} 
                    onChange={this.onChangeSize} 
                    disabled={this.state.disabled} />
            <div>Dash :</div>
            <InputNumber min={1} 
                    defaultValue={1} 
                    onChange={this.onChangeDash} 
                    disabled={this.state.disabled}/>
            <div>Gap :</div>
            <InputNumber min={1} 
                    defaultValue={1} 
                    onChange={this.onChangeGap} 
                    disabled={this.state.disabled}/>
        </div> 
         
    );
  }

}
