import React  from 'react';
import { Layout } from 'antd';
import { LayerTree } from '@terrestris/react-geo';
export default class LayerBar extends React.Component {

  constructor(props){
    super(props);
    this.handleLayerClick = this.handleLayerClick.bind(this)
  }

  handleLayerClick(e){

    let layerName  = e.target.innerHTML;
    this.props.onSelectedLayerChanged(layerName)
    
  }
 
  render() {
    const Sider  = Layout.Sider;
    return(
      <Sider 
          id='layerTree'>
           { this.props.store.map ? 
          <LayerTree
            onClick={this.handleLayerClick}
            map={this.props.store.map}
        /> :
          <br/>}
       
      </Sider>
    );
  }
}
