import { Select, Icon, Input,Modal,Drawer, Button } from 'antd';
import React  from 'react';

export default class newColumnModal extends React.Component {
  
    constructor(props) {
      super(props);
    }
    
    state = { 
        visible2:false,
        nomColonne: '',
        valeurColonne:'',
        columnType: "mesure"
    }
    showModal = () => {
        this.setState({
          visible2: true,
        });
      }
    
      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible2: false,
        });
      }
    
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible2: false,
        });
      }
    
      emitEmpty = () => {
        this.nomColonneInput.focus();
        this.setState({ nomColonne: '' });
      }
    
      emitEmpty2 = () => {
        this.valeurColonneInput.focus();
        this.setState({ valeurColonne: '' });
      }
    
      onChangeNomColonne = (e) => {
        this.setState({ nomColonne: e.target.value });
      }
    
      onChangeValeurColonne = (e) => {
        this.setState({ valeurColonne: e.target.value });
      }
    
      handleColumnTypeChange(value){  
        this.setState({
          columnType: value
          });
    }

    render() {
        const { nomColonne } = this.state;
        const suffix = nomColonne ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    
        const { valeurColonne } = this.state;
        const suffix2 = valeurColonne ? <Icon type="close-circle" onClick={this.emitEmpty2} /> : null;
        
        const Option = Select.Option;

        return (
            <Modal
                title="Basic Modal"
                visible={this.state.visible2}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                <Select 
                style={{ width: 120 }}
                onChange={this.handleColumnTypeChange}
                defaultValue={this.state.columnType}> 
                        <Option value="Colonne personalisee">Colonne personalisee</Option>
                        <Option value="mesure">mesure</Option>
                </Select>       
                <Input
                placeholder="Enter le nom de la colonne"
                suffix={suffix}
                value={nomColonne}
                onChange={this.onChangeNomColonne}
                ref={node => this.nomColonneInput = node}
                />
                <br /><br />
                <Input
                placeholder="Enter la valeur par defaut de la colonne"
                suffix={suffix2}
                value={valeurColonne}
                onChange={this.onChangeValeurColonne}
                ref={node => this.valeurColonneInput = node}
                />
            </Modal>
        )
    }
}