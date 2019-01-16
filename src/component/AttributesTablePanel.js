import React  from 'react';
import AttributesTable from './AttributesTable'
import AddAttributeTableColumnDialog from './AddAttributeTableColumnDialog'
import ModifyAttributeTableColumnDialog from './ModifyAttributeTableColumnDialog'
import DeleteAttributeTableColumnDialog from './DeleteAttributeTableColumnDialog'
import { message ,Drawer, Button } from 'antd';
import { log } from 'util';

export default class AttributesTablePanel extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = { 
      addColumnDialogState:false,
      deleteColumnDialogState:false,
      modifyColumnDialogState:false,
     };

    this.onColumnAdded=this.onColumnAdded.bind(this)
    this.onColumnModified=this.onColumnModified.bind(this)
    this.onColumnDeleted=this.onColumnDeleted.bind(this)
    this.onColumnOperationDialogCancelled=this.onColumnOperationDialogCancelled.bind(this)
    this.onAddColumnClicked=this.onAddColumnClicked.bind(this)
    this.onModifyColumnClicked=this.onModifyColumnClicked.bind(this)
    this.onDeleteColumnClicked=this.onDeleteColumnClicked.bind(this)
  }
  
  onColumnAdded(columnName,columnDefaultValue){
  
      this.props.onAttributeTableColumnAdded(
        this.props.store.layersTree.slectedMapLayer.name,
        { columnName ,columnDefaultValue}
      )
      
  }

  onColumnModified(layerName,columnName,columnNewValues){
  
    
    this.props.onAttributeTableColumnModified(layerName,{ columnName, columnNewValues })
    
}

  onColumnDeleted(layerName,columnName){
    this.props.onAttributeTableColumnDeleted(layerName,columnName)
  }

  onModifyColumnClicked(){

    var features = this.props.store.map.getLayers().getArray().filter(element=>{
      return element.getProperties().name == this.props.store.layersTree.slectedMapLayer.name
    })[0].getSource().getFeatures();
    
    if(features.length == 0){  message.error('Draw at least one feature'); return} 
    if(features[0].getKeys().length == 2){  message.error('Add at least one column'); return} 


    this.setState({
      ...this.state,
      modifyColumnDialogState: true
    })
  }

  onDeleteColumnClicked(){
    var features = this.props.store.map.getLayers().getArray().filter(element=>{
      return element.getProperties().name == this.props.store.layersTree.slectedMapLayer.name
    })[0].getSource().getFeatures();
    
    if(features.length == 0){  message.error('Draw at least one feature'); return} 
    if(features[0].getKeys().length == 2){  message.error('Add at least one column'); return} 


    this.setState({
      ...this.state,
      deleteColumnDialogState: true
    })
  }

  onAddColumnClicked(){
    var features = this.props.store.map.getLayers().getArray().filter(element=>{
      return element.getProperties().name == this.props.store.layersTree.slectedMapLayer.name
    })[0].getSource().getFeatures();
    
    if(features.length == 0){  message.error('Draw at least one feature'); return} 

        this.setState({
          ...this.state,
          addColumnDialogState: true
        })
 
  }

  onColumnOperationDialogCancelled(){
      this.setState({
        addColumnDialogState:false,
        deleteColumnDialogState:false,
        modifyColumnDialogState:false,
          })
  }
  
  render() {

    return (
        <Drawer
          width={640}
          title="Attribute table"
          placement="right"
          closable={true}
          onClose={this.props.onClose}
          visible={this.props.visible}
        >
              <div id="attrTableOperContainer">
                  <Button type="primary" 
                          onClick={this.onAddColumnClicked}
                          >
                                  Add Column
                  </Button>
                  <Button type="primary" 
                          onClick={this.onModifyColumnClicked}
                        >
                                  Edit Column
                  </Button>
                  <Button type="primary" 
                          onClick={this.onDeleteColumnClicked} 
                          >
                                  Delete Column
                  </Button>
              </div>
                      {this.state.addColumnDialogState ?
                          <AddAttributeTableColumnDialog
                              visible={this.state.addColumnDialogState}
                              onColumnAdded={this.onColumnAdded}
                              onCancel={this.onColumnOperationDialogCancelled}
                          />
                          :""}
                      {this.state.modifyColumnDialogState ?
                          <ModifyAttributeTableColumnDialog
                          visible={this.state.modifyColumnDialogState}
                          onColumnModified={this.onColumnModified}
                          map ={this.props.store.map} 
                          layer = {this.props.store.layersTree.slectedMapLayer} 
                          onCancel={this.onColumnOperationDialogCancelled}
                        />
                        :""}
                   {this.state.deleteColumnDialogState ?
                      <DeleteAttributeTableColumnDialog
                          visible={this.state.deleteColumnDialogState}
                          onColumnDeleted={this.onColumnDeleted}
                          onCancel={this.onColumnOperationDialogCancelled}
                          map ={this.props.store.map} 
                          layer = {this.props.store.layersTree.slectedMapLayer} 
                      />
                      :""}
                      
                      <AttributesTable 
                        map ={this.props.store.map} 
                        layer = {this.props.store.layersTree.slectedMapLayer} 
                      />

                      
        </Drawer>
    );
    
  }
  
}
