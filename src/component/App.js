import React from 'react'
import { Layout } from 'antd';
import MapPanel from "./MapPanel";
import LayerBar from "./LayerBar";
import Header from "./Header";
import ToolBar from "./ToolBar";
import AttributesTablePanel from "./AttributesTablePanel";



export default class App extends React.Component {

  render() {
    return(
      <Layout 
        className="root">
          <Header  {...this.props}/>
          <Layout className="root"
           hasSider={true}>
               <LayerBar {...this.props}/>
                <MapPanel {...this.props}/>
                <ToolBar/>    
                <AttributesTablePanel {...this.props}/>
          </Layout>
      </Layout>
    );
  }
}