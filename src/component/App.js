import React from 'react'
import { Layout } from 'antd';
import MapPanel from "./MapPanel";
import LayerBar from "./LayerBar";
import Header from "./Header";
import ToolBar from "./ToolBar";

export default class App extends React.Component {



  render() {
    return(
      <Layout id="root">
      <LayerBar {...this.props}/>
      <Layout>
            <Header  {...this.props}/>
            <MapPanel {...this.props} />
      </Layout>
      <ToolBar/>  
      </Layout>
    );
  }
}
