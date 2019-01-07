import React from 'react';
import { Modal , Select} from 'antd';
import 'antd/dist/antd.css';



export default class AddRemoveItemDialog extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        data : this.props.data(),
        newData : "",
    }
  }

    handleSubmit(){  

        console.log(this.state.newData);
        this.props.OnSubmit(this.state.newData);
        this.props.OnHide();

    }
        
    handleCancel(){

        this.props.OnHide();
    }

        
    handleChange(value) {
        console.log(value);
        var data = this.state.data;
        let newData = [];

        data.forEach(element => {
            for (var i = 0; i < value.length; i++) {
                console.log(element.key);
                console.log(value[i]);
                if(String(element.key)===String(value[i])) {
                    console.log("I'm in.........");
                    newData.push(element);
                    break;
                }
            }
        });

        this.setState({
            newData : newData,
        });
        
    }
 
  render() {

    const Option = Select.Option ; 
    const children = [];
    var text = "Add";

        for (let i = 0; i < this.state.data.length; i++) {
            children.push(<Option key={this.state.data[i].key}>{this.state.data[i].key}</Option>);
        }

    
    return(
        <div>
        <Modal
          title="Add a vector Layer"
          okText= {text}
          visible={this.props.visible}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
        >
            <span>
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    onChange={this.handleChange}>

                        {children}

                </Select>
            </span>
        </Modal>
      </div>
    );
  }
}
