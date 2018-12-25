import React  from 'react';
import { Layout } from 'antd';
import { LayerTree } from '@terrestris/react-geo';
export default class LayerBar extends React.Component {

  constructor(props){
    super(props);
    this.handleLayerClick = this.handleLayerClick.bind(this)
  }

  handleLayerClick(selectedKeys, e){
    
    this.props.onSelectedLayerChanged(e.selectedNodes.length > 0 ? e.selectedNodes[0].props.title : "sketch")
    
  }
 
  render() {
    const Sider  = Layout.Sider;
    return(
      <Sider 
          id='layerTree'>
           { this.props.store.map ? 
          <LayerTree
            onSelect={this.handleLayerClick}
            map={this.props.store.map}
            filterFunction={(layer) => layer.get('name') != 'sketch' && layer.get('name') != 'map' }
        /> :
          <br/>}
       
      </Sider>
    );
  }
}
