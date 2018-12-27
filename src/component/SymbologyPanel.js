import React from 'react';
import { Layout ,Button,} from 'antd';
import 'antd/dist/antd.css';
import BorderStyler from "./BorderStyler";
import SymbologyHandler from "./SymbologyHandler";


export default class SymbologyPanel extends React.Component {



    constructor(props) {
        super(props);
        this.state ={
            Layer : this.props.store.layersTree.slectedMapLayer.name,
        };
    }

  

  onSymbologyButtonClicked = () => {

  }
  
  render() {
    const Content  = Layout.Content;
    
    return(
        <Content id="symbologypanel">
            <h1 className="panel_title">Symbology</h1>
            <h3 className="panel_text"> Layer : {this.state.Layer}</h3>
            <SymbologyHandler/>
            <BorderStyler />
            <div className="flex_div" style={{margin:20}}>
                <Button type="primary" block style={{margin:10}} onClick={this.props.action}>Cancel</Button>
                <Button type="primary" block style={{margin:10}}>Apply</Button>
            </div>
        </Content>    
    );
  }

}
