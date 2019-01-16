import React from 'react';
import { Layout, Drawer } from 'antd';
import MapPanel from "./MapPanel";
import LayerBar from "./LayerBar";
import Header from "./Header";
import ToolBar from "./ToolBar";
import Footer from "./Footer";
import SymbologyPanel from "./SymbologyPanel";
import AttributesTablePanel from "./AttributesTablePanel";
import { log } from 'util';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.ChangeSymbologyPanelState = this.ChangeSymbologyPanelState.bind(this);
    this.ChangeAttrTablePanelState = this.ChangeAttrTablePanelState.bind(this);

    this.state ={
        ShowSymbologyPanel:false,
        ShowAttrTablePanel:false,
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

  ChangeAttrTablePanelState(){
    if(this.props.store.layersTree.slectedMapLayer.name == "sketch"){
      this.setState({
        ShowAttrTablePanel:false,
      });
    } else {
      this.setState({
        ShowAttrTablePanel:!this.state.ShowAttrTablePanel,
      });
    }
  }

  render() {
    return(
      <Layout 
        className="root">
          <Header  {...this.props}/>
          <Layout className="root" id="content"
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
                <AttributesTablePanel 
                  {...this.props}
                  onClose={this.ChangeAttrTablePanelState}
                  visible={this.state.ShowAttrTablePanel}/>
                <ToolBar 
                  {...this.props}
                    onSymblogyIconClicked={this.ChangeSymbologyPanelState}
                    onAttrTableIconClicked={this.ChangeAttrTablePanelState}
                />
          </Layout>
          <Footer/>
      </Layout>
    );
  }
}