import React from 'react';
import { Layout,Icon } from 'antd';

export default class ToolBar extends React.Component {

  
  componentDidMount() {
  
   
  }

  render() {
    const ToolBarContainer  = Layout.Sider;
    return(

      <ToolBarContainer width={"5%"} className ="tool_bar" >
        <Icon type="setting" theme="filled" className="tools" onClick={this.props.action} />
      </ToolBarContainer>
    );
  }
}
