import React from 'react';
import { Layout, Drawer } from 'antd';
import MapPanel from "./MapPanel";
import LayerBar from "./LayerBar";
import Header from "./Header";
import ToolBar from "./ToolBar";
import Footer from "./Footer";
import SymbologyPanel from "./SymbologyPanel";
import AttributesTablePanel from "./AttributesTablePanel";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.ChangeSymbologyPanelState = this.ChangeSymbologyPanelState.bind(this);

    this.state ={
        ShowSymbologyPanel:false,
    };
  }

  ChangeSymbologyPanelState(){
    if(this.props.store.layersTree.slectedMapLayer.name == "sketch"){
      this.setState({
        ShowSymbologyPanel:false,
      });
    } else {
      this.setState({
        ShowSymbologyPanel:!this.state.ShowSymbologyPanel,
      });
    }
  }

  render() {
    return(
      <Layout 
        className="root">
          <Header  {...this.props}/>
          <Layout className="root"
           hasSider={true}>
               <LayerBar {...this.props}/>
                <MapPanel {...this.props}/>
                <Drawer
            width={"40%"}
            destroyOnClose={true}
            placement="right"
            closable={true}
            onClose={this.ChangeSymbologyPanelState}
            visible={this.state.ShowSymbologyPanel}>
              
              <SymbologyPanel action={this.ChangeSymbologyPanelState} {...this.props}/>
          
          </Drawer>
          <ToolBar action={this.ChangeSymbologyPanelState}/>
          <AttributesTablePanel {...this.props}/>
          </Layout>
      </Layout>
    );
  }
}