import React from 'react';
import { Layout ,Button,} from 'antd';
import 'antd/dist/antd.css';
import BorderStyler from "./BorderStyler";
import SymbologyHandler from "./SymbologyHandler";
import { Fill, Stroke, Style} from 'ol/style.js';
import { DEFAULT_SCALE } from "react-colorscales";


export default class SymbologyPanel extends React.Component {



    constructor(props) {
        super(props);
        this.state ={
            layerName : this.props.store.layersTree.slectedMapLayer.name,
            borderstyle : new Stroke({
                color : 'rgba(154, 26, 56, 0.8)',
            }),
            fillstyle : new Fill({
                color : 'rgba(154, 26, 56, 0.5)',
            }),
            colorscale: DEFAULT_SCALE,
            data : null ,
        };
        this.onApplyButtonClicked = this.onApplyButtonClicked.bind(this);
        this.onBorderStyleChanged = this.onBorderStyleChanged.bind(this);
        this.onFeaturesStyleChanged = this.onFeaturesStyleChanged.bind(this);
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

    onFeaturesStyleChanged(features,colorscale){

        this.setState({
            colorscale : colorscale,
            data : features,
        });

        console.log(features);
        console.log(colorscale);

    }

    onApplyButtonClicked(){

        var fillStyle = this.props.store.map.getLayers().getArray().filter(element=>{
            return element.getProperties().name == this.state.layerName;
        })[0].getStyle();

        console.log("the fill style is" + fillStyle);
        var style = new Style({
            stroke: this.state.borderstyle,
            fill: fillStyle instanceof Style ? fillStyle.getFill() : this.state.fillstyle,
            image: null
          });

        this.props.onLayerStyleChanged(this.state.layerName, style);
        this.props.onFeaturesStyleChanged(this.state.layerName,this.props.store.layersTree.slectedMapLayer.type, this.state.colorscale, this.state.data);
      
        console.log(this.state.colorscale + " test " + this.state.data);
        


        
    }
  
  render() {
    const Content  = Layout.Content;
    
    return(
        
        <Content id="symbologypanel">
            <div>
                <h1 className="panel_title">Symbology</h1>
                <h3 className="panel_text"> Layer : {this.state.layerName}</h3>
                <SymbologyHandler {...this.props} action={this.onFeaturesStyleChanged}/>
                {this.props.store.layersTree.slectedMapLayer.type=="Point" ? null : <BorderStyler {...this.props} action ={this.onBorderStyleChanged}/>}
            </div>
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
