import React from 'react';
import { Layout , Button, Icon,} from 'antd';
import 'antd/dist/antd.css';

export default class MapPanel extends React.Component {

  constructor(props) {
    super(props);
    console.log("I am here");
    
  }

  onImportButtonClicked = () => {
    this.props.onMapImported("https://imgs.xkcd.com/comics/online_communities.png");
  }
  
  render() {
    const Content  = Layout.Content;
   
    return(
      <Content id="mapPanel">       
                      { this.props.store.map ?
                              <div style={{ display : "none"}}></div>: 
                              <Button
                              id="uploadButton"
                              onClick={this.onImportButtonClicked}>
                                <Icon type="upload" /> 
                                Click to Upload
                            </Button>
                      }  
                              <div id="map"></div>
                              
                             
      </Content>
    );
  }
}
