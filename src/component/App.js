import React from 'react';
import { Layout } from 'antd';
import MapPanel from "./MapPanel";
import LayerBar from "./LayerBar";
import Header from "./Header";
import ToolBar from "./ToolBar";
import Footer from "./Footer";
import SymbologyPanel from "./SymbologyPanel";

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.ChangeSymbologyPanelState = this.ChangeSymbologyPanelState.bind(this);

    this.state ={
        ShowSymbologyPanel:false,
    };
  }

  ChangeSymbologyPanelState(){
    this.setState({
      ShowSymbologyPanel:!this.state.ShowSymbologyPanel,
    });
  }

  render() {
    return(
      <Layout id="root">
        <Header  {...this.props}/>
        <Layout>
          <LayerBar {...this.props}/>
          <MapPanel {...this.props} />
          {this.state.ShowSymbologyPanel && <SymbologyPanel/>}
          <ToolBar action={this.ChangeSymbologyPanelState}/>
        </Layout>
      </Layout>
    );
  }
}
