import React from 'react';
import { Layout ,Button,} from 'antd';
import 'antd/dist/antd.css';
import BorderStyler from "./BorderStyler";
import SymbologyHandler from "./SymbologyHandler";
import { Fill, Stroke, Style} from 'ol/style.js';


export default class SymbologyPanel extends React.Component {



    constructor(props) {
        super(props);
        this.state ={
            layerName : this.props.store.layersTree.slectedMapLayer.name,
            borderstyle : new Stroke(),
            fillstyle : new Fill(),
        };
        this.onApplyButtonClicked = this.onApplyButtonClicked.bind(this);
        this.onBorderStyleChanged = this.onBorderStyleChanged.bind(this);
    }

  
    onBorderStyleChanged(stroke){
        console.log(stroke);
        this.setState({
            borderstyle:stroke,
        });
    }

    onFillStyleChanged(fill){
        console.log(fill);
        this.setState({
            fillstyle:fill,
        });
    }

    onApplyButtonClicked(){
        console.log(this.props.store.map.getLayers().getArray().filter(ele=>{
                return(ele.get("name")==this.state.layerName);
              })[0].get("style"));
        var style = new Style({
            stroke: this.state.borderstyle,
            fill: this.state.fillstyle,
          })

        this.props.onLayerStyleChanged(this.state.layerName, style);
        this.props.action();
        
    }
  
  render() {
    const Content  = Layout.Content;
    
    return(
        
        <Content id="symbologypanel">
            <h1 className="panel_title">Symbology</h1>
            <h3 className="panel_text"> Layer : {this.state.layerName}</h3>
            <SymbologyHandler/>
            {this.props.store.layersTree.slectedMapLayer.type=="Point" ? null : <BorderStyler  action ={this.onBorderStyleChanged}/>}
            <div className="flex_div"
                style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    borderTop: '1px solid #e9e9e9',
                    padding: '10px 16px',
                    background : "#FFFFFF"
                  }}>
                <Button type="primary" block style={{margin:10}} onClick={this.props.action}>Cancel</Button>
                <Button type="primary" block style={{margin:10}} onClick={this.onApplyButtonClicked}>Apply</Button>
            </div>
        </Content>    
    );
  }

}
