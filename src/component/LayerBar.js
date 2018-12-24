import React  from 'react';
import { Layout } from 'antd';

export default class LayerBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      collapse :false,
    };
  }

   onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    const Sider  = Layout.Sider;
    return(
      <Sider 
      className="siders"
      id='above'
      collapsible
      collapsed={this.state.collapsed}
      onCollapse={this.onCollapse}>
         
      </Sider>
    );
  }
}
