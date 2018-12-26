import React from 'react';
import { Layout } from 'antd';
import MapPanel from "./MapPanel";
import LayerBar from "./LayerBar";
import Header from "./Header";
import ToolBar from "./ToolBar";
import Footer from "./Footer";
import SymbologyPanel from "./SymbologyPanel";

export default class App extends React.Component {



  render() {
    return(
      <Layout id="root">
        <Header  {...this.props}/>
        <Layout>
          <LayerBar {...this.props}/>
          <MapPanel {...this.props} />
          <SymbologyPanel showSymbology={false}/>
          <ToolBar/>
        </Layout>
      </Layout>
    );
  }
}
