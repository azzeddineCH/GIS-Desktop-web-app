import React  from 'react';
import { Layout } from 'antd';
import { LayerTree } from '@terrestris/react-geo';

export default class MapLayersTree extends React.Component {

  constructor(props){
    super(props);
  }
 
  render() {
    return(
          <LayerTree
            showLine={true}
            onSelect={this.props.onLayerClicked}
            map={this.props.map}
            filterFunction={(layer) => layer.get('name') != 'sketch' && layer.get('name') != 'map' }
           />
        );
  }
}
