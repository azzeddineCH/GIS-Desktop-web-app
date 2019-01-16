import React from 'react';
import { Layout,Icon ,Button} from 'antd';
import { List } from 'antd';

export default class ToolBar extends React.Component {

  
  render() {
    const ToolBarContainer  = Layout.Sider;

    const data = [
      <Button className = "hidedButton"  disabled={(this.props.store.layersTree.slectedMapLayer.name == "sketch" || this.props.store.layersTree.slectedMapLayer.type =="default") ? true : false} onClick={this.props.onAttrTableIconClicked}><Icon type="table"  className="tools"/></Button>,
      <Button className = "hidedButton"  disabled={(this.props.store.layersTree.slectedMapLayer.name == "sketch" || this.props.store.layersTree.slectedMapLayer.type =="default") ? true : false} onClick={this.props.onSymblogyIconClicked}><Icon type="highlight"   className="tools"/></Button>
      
    ];
    return(

      <ToolBarContainer width={"3.5%"} className ="tool_bar" >
        <List
             size="large"
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
      </ToolBarContainer>
    );
  }
}
