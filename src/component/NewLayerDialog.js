import React from 'react';
import { Modal , Input,message, Select} from 'antd';
import 'antd/dist/antd.css';



export default class NewLayerDialog extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleLayerNameChange = this.handleLayerNameChange.bind(this)
    this.handleLayerTypeChange = this.handleLayerTypeChange.bind(this)
    this.state = {
        layerName: "",
        layerType: "Point"
    }
  }

    handleSubmit(){  
        const { layerName , layerType} = this.state
    
        const layerAlreadyExist = this.props.store.layersTree.mapLayers.some((el)=>{
            return el.name === layerName;
          
        })

        if(layerAlreadyExist){
            message.error('Layer name already exist');
        }else{
            this.props.onMapLayerAdded(layerName,layerType)
            this.handleCancel()
        }
        
    }
        
    handleCancel(){

        this.props.onNewLayerDialogStateChenged(false);
    }

    handleLayerNameChange(e){  
        this.setState({
            layerName: e.target.value
          });
        
        
    }
    
    handleLayerTypeChange(value){  
        this.setState({
            layerType: value
          });
    }
 
  render() {
   
    const Option = Select.Option ; 
    return(
        <div>
        <Modal
          title="Add a vector Layer"
          okText="Add"
          visible={this.props.store.newLayerDialogState}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
          okButtonProps={{
            disabled: (this.state.layerName == "")
          }}
        >
            <span>
                    <Input
                        type="text"
                        value={this.state.layerName}
                        onChange={this.handleLayerNameChange}
                        placeholder="Vector layer name"
                        style={{ width: '65%', marginRight: '3%' }}
                    />
                    <Select 
                         style={{ width: 120 }}
                         onChange={this.handleLayerTypeChange}
                         defaultValue={this.state.layerType}> 
                                    <Option value="Point">Point</Option>
                                    <Option value="LineString">Line</Option>
                                    <Option value="Polygon">Polygon</Option>
                    </Select>
            </span>
        </Modal>
      </div>
    );
  }
}
