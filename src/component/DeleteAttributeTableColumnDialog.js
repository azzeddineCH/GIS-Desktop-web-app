import React  from 'react';
import { Select,Input,Modal,message } from 'antd';

export default class DeleteAttributeTableColumnDialog extends React.Component {
  
  constructor(props) {
    super(props);
    this.onDeleteColumnDialogSubmitted = this.onDeleteColumnDialogSubmitted.bind(this);
    this.onSeletedFeaturePropertyChanged = this.onSeletedFeaturePropertyChanged.bind(this);
    
    
    this.mapLayerFeatures = this.props.map.getLayers().getArray().filter(element=>{
      return element.getProperties().name == this.props.layer.name
    })[0].getSource().getFeatures();

    this.mapLayerFeatuersProperties = (this.mapLayerFeatures.length > 1 ) ? this.mapLayerFeatures[0].getKeys() : null ;

    this.state = { 
          selectedFeatureProperty: null
     };

 


  }

  onSeletedFeaturePropertyChanged(selectedFeatureProperty){
      this.setState({
        selectedFeatureProperty
      })
  }

  
  onDeleteColumnDialogSubmitted(){
    this.props.onColumnDeleted(this.props.layer.name,this.state.selectedFeatureProperty)

  }



 

  
  render() {

    return (

            <Modal
              title="Delete Column"
              visible={this.props.visible}
              onOk={this.onDeleteColumnDialogSubmitted}
              onCancel={this.props.onCancel}
              okButtonProps={{
                type: "danger",
                disabled: (this.state.selectedFeatureProperty == null)
              }}
            >
                <Select defaultValue="select a property"  onChange={this.onSeletedFeaturePropertyChanged}>
                      {this.mapLayerFeatuersProperties.map(property=>(property == "ID"  || property == "geometry")? "" : <Select.Option value={property}>{property}</Select.Option>)}
                </Select>
            </Modal>

    );
    
  }
  
}
