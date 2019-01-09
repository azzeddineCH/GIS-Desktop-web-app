import React from 'react';
import { Layout , Button, Icon,Input,Tag} from 'antd';
import 'antd/dist/antd.css';

export default class MapPanel extends React.Component {

  constructor(props) {
    super(props);
    console.log("I am here");
    this.state = {
      imageUrl: ""
    }
    
  }

  onImportButtonClicked = () => {
    this.props.onMapImported(this.state.imageUrl);
  }

  onChangeImageUrl = (e)=>{
    this.setState({
      imageUrl: e.target.value
    })
  }
  
  render() {
    const Content  = Layout.Content;
   
    return(
      <Content id="mapPanel">       
                      { this.props.store.map ?
                              "": 
                              <div id="upload">
                                <Input
                                    id="uploadinput"
                                    placeholder="Enter the map image url"
                                    prefix={<Icon type="file-add" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    value={this.state.imageUrl}
                                    onChange={this.onChangeImageUrl}
                                    />
                                <Tag  id="uploadTag" ><a href="https://imgbb.com/" target="blank">Get a web Url for your local map on imgbb</a></Tag>
                                <Button
                                     id="uploadButton"
                                     disabled={this.state.imageUrl.length==0}
                                     onClick={this.onImportButtonClicked}>
                                    <Icon type="upload" /> 
                                    Click to Upload
                                </Button>
                              </div>
                      }  
                              <div id="map"></div>
                              
                             
      </Content>
    );
  }
}
