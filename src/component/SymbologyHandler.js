import React from 'react';
import { Select, Table,Button} from 'antd';
import 'antd/dist/antd.css';
import ColorScalePicker from "./ColorScalePicker";


export default class SymbologyHandler extends React.Component {



    constructor(props) {
        super(props);
        this.state ={
            Layer : "1st layer",
        };
    }

     
    handleChange(value) {
        console.log(value); // { key: "lucy", label: "Lucy (101)" }
    }

  
  render() {
    const Option = Select.Option;
    const columns = [{
        title: 'Column',
        dataIndex: 'name',
        render: text => <a href="javascript:;">{text}</a>,
      }, {
        title: 'Count',
        dataIndex: 'age',
      }];
      const data = [{
        key: '1',
        name: 'John Brown',
        age: 32,
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
      }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
      }, {
        key: '4',
        name: 'Disabled User',
        age: 99,
      }];
    
      // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    return(

        <div> 
            <div className="flex_div">
                <Select labelInValue defaultValue={{ key: 'lucy' }} style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="jack">Jack (100)</Option>
                    <Option value="lucy">Lucy (101)</Option>
                </Select>

                <ColorScalePicker />
            </div>

            <Table className="tab" 
                    rowSelection={rowSelection} 
                    columns={columns} 
                    dataSource={data} 
                    pagination={{ pageSize: 3 }} />

            <div className="flex_div">
                <Button type="primary">Add</Button>
                <Button type="primary">Add All</Button>
                <Button type="primary">Remove</Button>
                <Button type="primary">Remove All</Button>
            </div> 
        </div>   
    );
  }

}
