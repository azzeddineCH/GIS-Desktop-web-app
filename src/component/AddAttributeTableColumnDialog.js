import React  from 'react';
import { Select,Input,Modal,message } from 'antd';

export default class AddAttributeTableColumnDialog extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state = { 
      columnName: '',
      columnDefaultValue: '',
      columnType: null,
     };

     this.onColumnNameChanged = this.onColumnNameChanged.bind(this);
     this.onColumnDefaultValueChanged = this.onColumnDefaultValueChanged.bind(this);
     this.onColumnTypeChanged = this.onColumnTypeChanged.bind(this);
     this.onAddColumnDialogSubmitted = this.onAddColumnDialogSubmitted.bind(this);


  }


  onAddColumnDialogSubmitted(){


    const {columnName,columnDefaultValue,columnType} = this.state
    var parsedValue = columnDefaultValue;
    if(columnType == "Number"){
      if(isNaN(columnDefaultValue)) {
           message.error('a non valid default value'); 
           return;
      }else 
           parsedValue = parseInt(columnDefaultValue);
    }
    this.props.onColumnAdded(columnName,parsedValue)
  }

  onColumnNameChanged(e){
    this.setState({ ...this.state,columnName: e.target.value });
  }

  onColumnDefaultValueChanged(e){
    this.setState({ ...this.state,columnDefaultValue: e.target.value });
  }

  onColumnTypeChanged(value){ 
    
      this.setState({
        ...this.state,
        columnType: value
      })
  }

  
  render() {

    return (

                      <Modal
                        title="Add Column"
                        visible={this.props.visible}
                        onOk={this.onAddColumnDialogSubmitted}
                        onCancel={this.props.onCancel}
                        okButtonProps={{
                          disabled: (this.state.columnName == "" || this.state.columnType == null)
                        }}
                      >

                            <Input
                              placeholder="New column name"
                              value={this.state.columnName}
                              onChange={this.onColumnNameChanged}
                              style={{ marginBottom: 15 }} 
                            />
                            <br/>
                            <Select defaultValue="Choose a data type" style={{marginBottom: 15 }} onChange={this.onColumnTypeChanged}>
                                    <Select.Option value="Number">Number</Select.Option >
                                    <Select.Option value="String">String</Select.Option >
                            </Select>
                            <Input
                              placeholder="New column default value"
                              value={this.state.columnDefaultValue}
                              onChange={this.onColumnDefaultValueChanged}
                              style={{ marginBottom: 15 }} 
                            />

                      </Modal>

    );
    
  }
  
}
