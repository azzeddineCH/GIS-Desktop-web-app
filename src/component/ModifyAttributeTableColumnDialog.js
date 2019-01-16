import React  from 'react';
import { List,Modal,Radio,Input , Tabs,Tag} from 'antd';
import { log } from 'util';

export default class ModifyAttributeTableColumnDialog extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.onModifyColumnDialogSubmitted = this.onModifyColumnDialogSubmitted.bind(this);
    this.onSelectedPropertyChanged = this.onSelectedPropertyChanged.bind(this);
    this.onFeaturePropertyModified = this.onFeaturePropertyModified.bind(this);

    this.mapLayerFeatures = this.props.map.getLayers().getArray().filter(element=>{
                  return element.getProperties().name == this.props.layer.name
            })[0].getSource().getFeatures();

    this.mapLayerFeatuersProperties = (this.mapLayerFeatures.length > 1 ) ? this.mapLayerFeatures[0].getKeys() : null ;
    var featuresPropertyValues = (this.mapLayerFeatuersProperties == null) ? null : this.mapLayerFeatures.map((feature)=>{
      return feature.get(this.mapLayerFeatuersProperties[2]);
    })

  
    this.state ={
      slectedFeatureProperty: this.mapLayerFeatuersProperties[2] || null,
      featuresPropertyValues
    }
  }
  
  onModifyColumnDialogSubmitted(){
      this.props.onColumnModified(
          this.props.layer.name,
          this.state.slectedFeatureProperty,
          this.state.featuresPropertyValues
      )
  }

  onSelectedPropertyChanged(key){
    
    var featuresPropertyValues = (this.mapLayerFeatuersProperties == null) ? null : this.mapLayerFeatures.map((feature)=>{
      return feature.get(key);
    })
    
    this.setState({
        slectedFeatureProperty: key,
        featuresPropertyValues
     
      })
  }

  onFeaturePropertyModified(featureId,newValue){
    var featuresPropertyValues = this.state.featuresPropertyValues.slice(0);
    featuresPropertyValues[featureId] = newValue
    this.setState({
      ...this.state,
      featuresPropertyValues
   
    })
   
    
  }
 
  
  render() {

    return (

                      <Modal
                        title="Modify Column"
                        visible={this.props.visible}
                        onOk={this.onModifyColumnDialogSubmitted}
                        okText={"Save "+ this.state.slectedFeatureProperty+" changes"}
                        onCancel={this.props.onCancel}
                      >
                          <Tabs defaultActiveKey={this.mapLayerFeatuersProperties[2]} onChange={this.onSelectedPropertyChanged}>
                                {this.mapLayerFeatuersProperties.map(property=>
                                  (property == "ID"  || property == "geometry")?"":
                                    <Tabs.TabPane tab={property} key={property}>
                                          <List className="featuresPropertiesContainer"
                                              itemLayout="vertical"
                                              dataSource={this.mapLayerFeatures}
                                              size="large"
                                              renderItem={feature => (
                                                <List.Item style={{ width:"100%"}}>
                                                  <Tag color="blue" style={{ marginBottom: 8 }} >Feature {feature.get("ID")}</Tag>
                                                  <Input 
                                                      value={this.state.featuresPropertyValues[feature.get("ID")] }
                                                      onChange={(e)=> this.onFeaturePropertyModified(feature.get("ID"),e.target.value) }
                                                        />
                                                </List.Item>
                                              )}
                                            />
                                    </Tabs.TabPane>
                                
                                )}
                          </Tabs>
                      </Modal>

    );
    
  }
  
}
