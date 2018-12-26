import React from 'react';
import { Layout ,Button,} from 'antd';
import 'antd/dist/antd.css';
import BorderStyler from "./BorderStyler";
import SymbologyHandler from "./SymbologyHandler";


export default class SymbologyPanel extends React.Component {



    constructor(props) {
        super(props);
        this.state ={
            Layer : "1st layer",
        };
    }

  

  onSymbologyButtonClicked = () => {

  }
  
  render() {
    const Content  = Layout.Content;
    //const viridisColorscale = ['#fafa6e', '#9cdf7c', '#4abd8c', '#00968e', '#106e7c', '#2a4858'];
    
    return(
        <Content id="symbologypanel">
            <h1 className="panel_title">Symbology</h1>
            <h3 className="panel_text">Layer : {this.state.Layer}</h3>
            <SymbologyHandler/>
            <BorderStyler />
            <div className="flex_div" style={{margin:20}}>
                <Button type="primary" block style={{margin:10}}>Cancel</Button>
                <Button type="primary" block style={{margin:10}}>Apply</Button>
            </div>
        </Content>    
    );
  }

}
