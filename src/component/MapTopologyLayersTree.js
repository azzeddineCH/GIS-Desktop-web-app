import React  from 'react';
import { Layout } from 'antd';
import { LayerTree } from '@terrestris/react-geo';

export default class MapTopologyLayersTree extends React.Component {

  constructor(props){
    super(props);
  }
 
  render() {
    return(
          <LayerTree
            showLine={true}
            checkable={true}
            //disable={true}
             onSelect={this.props.onLayerClicked}
           // onSelect={} 
            map={this.props.map}
            filterFunction={(layer) =>  layer.get('toponame') =='topology' }
           />
        );
  }
}
