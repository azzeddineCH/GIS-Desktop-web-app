import { Select, Icon, Input,Modal,Drawer, Button } from 'antd';
import React  from 'react';
import AttributesTable from './AttributesTable'

export default class AttributesTablePanel extends React.Component {
  
  constructor(props) {
    super(props);
    this.object = this.props.store.featurePropertiesObject
    this.showDrawer=this.showDrawer.bind(this)
    this.onClose=this.onClose.bind(this)
    this.showModal=this.showModal.bind(this)
    this.handleOk=this.handleOk.bind(this)
    this.handleCancel=this.handleCancel.bind(this)
    this.onChangeNomColonne=this.onChangeNomColonne.bind(this)
    this.onChangeValeurColonne=this.onChangeValeurColonne.bind(this)
    this.handleColumnTypeChange=this.handleColumnTypeChange.bind(this)
  }
  
  state = { 
    visible: false,
    visible2:false,
    nomColonne: '',
    valeurColonne:'',
    columnType: "mesure",
    disabled:true
   };
   
  showDrawer = () => {
    this.setState({
      visible: true,
      visible2:false
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showModal = () => {
    this.setState({
      visible2: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    console.log(this.object)
    this.setState({
      visible2: false,
    });
    if (this.state.columnType=='Measure'){
      if (this.state.nomColonne!='') this.addProperty(this.state.nomColonne,0)
    }
    else{
      if (this.state.nomColonne!=''&& this.state.valeurColonne!='') this.addProperty(this.state.nomColonne,this.state.valeurColonne)
    }
    console.log('dooone')
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  }

  onChangeNomColonne = (e) => {
    this.setState({ nomColonne: e.target.value });
  }

  onChangeValeurColonne = (e) => {
    this.setState({ valeurColonne: e.target.value });
  }

  handleColumnTypeChange(value){ 
    if (value=='Mesure'){
      this.setState({
        disabled:true,
        columnType: value
      })
    }else{
      this.setState({
        disabled:false,
        columnType: value
      })
    } 
  }

  addProperty(key,value){
    this.object[key]=value
  }

  getColumns(){

  }

  getInputs(keys){
    for (var i=0;i<keys.length ;i++){
      return <input
          defaultValue='aa'
      />
    }
  }

  
  render() {

    const { nomColonne } = this.state;
    const { valeurColonne } = this.state;
    const featureKeys = Object.keys(this.object)
    
    const Option = Select.Option;
    return (
        <Drawer
          width={640}
          title="Table Attributaire"
          placement="right"
<<<<<<< HEAD
          closable={false}
=======
          closable={true}
>>>>>>> 9f6c3d83bcf0436ac79920fa9d9d3fea8bf514e7
          onClose={this.props.onClose}
          visible={this.props.visible}
        >

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
                        value={nomColonne}
                        onChange={this.onChangeNomColonne}
                      />
                      <br /><br />
                      <Input
                        placeholder="Enter la valeur par defaut de la colonne"
                        value={valeurColonne}
                        onChange={this.onChangeValeurColonne}
                        disabled={this.state.disabled}
                      />
                      </Modal>

                      
                      <AttributesTable 
                        map ={this.props.store.map} 
                        layer = {this.props.store.layersTree.slectedMapLayer} 
                        featuresProperties={this.object}
                      />
                      <Button type="primary"onClick={this.showModal} >
                        Ajouter colonne
                      </Button>
        </Drawer>
    );
    
  }
  
}
