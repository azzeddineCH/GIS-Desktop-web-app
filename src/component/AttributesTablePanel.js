import { Select, Form, Input,Modal,Drawer, Button } from 'antd';
import React  from 'react';
import AttributesTable from './AttributesTable'

export default class AttributesTablePanel extends React.Component {
  
  constructor(props) {
    super(props);
    this.object = this.props.store.featurePropertiesObject
    this.cF =this.props.store.currentFeature
    this.showDrawer=this.showDrawer.bind(this)
    this.onClose=this.onClose.bind(this)
    this.showModal=this.showModal.bind(this)
    this.handleOk=this.handleOk.bind(this)
    this.handleCancel=this.handleCancel.bind(this)
    this.handleOk2=this.handleOk2.bind(this)
    this.handleCancel2=this.handleCancel2.bind(this)
    this.onChangeNomColonne=this.onChangeNomColonne.bind(this)
    this.onChangeValeurColonne=this.onChangeValeurColonne.bind(this)
    this.handleColumnTypeChange=this.handleColumnTypeChange.bind(this)
    this.onTableFeatureSelected=this.onTableFeatureSelected.bind(this)
    this.showModal2=this.showModal2.bind(this)
    this.valChanged=this.valChanged.bind(this)
    this.F=this.props.store.features
    this.state = { 
      visible: false,
      visible2:false,
      visible3:false,
      nomColonne: '',
      valeurColonne:'',
      columnType: "measure",
      disabled:true,
      currentFeature: this.cF,
      newVal:'',
      changedKey:''
     };
  }

   showModal2 = () => {
    this.setState({
      visible3: true,
      currentFeature:this.cF,
    });

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
    this.setState({
      visible2: false,
    });

    if (this.state.columnType=='measure'){
      if (this.state.nomColonne!='') {
        this.addMeasure()
      }
    }
    else{
      if (this.state.nomColonne!=''&& this.state.valeurColonne!='') this.addProperty(this.state.nomColonne,this.state.valeurColonne)
    }
  }

  handleOk2 =(e)=>{
    this.setState({
      visible3: false,
    });
  
    var feature= Object.assign( Object.create( Object.getPrototypeOf(this.state.currentFeature)), this.state.currentFeature)
    var key =this.state.changedKey;
    var value=this.state.newVal;
    console.log(" the key"+ key);
    console.log(" the value is "+value);
  
   
    feature.unset(key)
    feature.setProperties({ [key] :parseInt(value)})
    console.log(feature);
    console.log(feature.getProperties());
    console.log(feature);
    
    this.setState({...this.state, currentFeature:feature},()=>{
      console.log(this.state.currentFeature.getProperties())

    });
    this.F.push(feature);

    
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  }

  handleCancel2 =(e)=>{
    console.log(e);
    this.setState({
      visible3: false,
    });
  }

  onChangeNomColonne = (e) => {
    this.setState({ nomColonne: e.target.value });
  }

  onChangeValeurColonne = (e) => {
    this.setState({ valeurColonne: e.target.value });
  }

  handleColumnTypeChange(value){ 
    if (value=='mesure'){
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

  getMeasure(feature){
    var geo =feature.getGeometry()

    if (geo.getType()=='LineString') return feature.getGeometry().getLength()
    else{
        if(geo.getType()=='Polygon') return feature.getGeometry().getArea() 
        else return 0
    }
}

  addProperty(key,value){
    this.object[key]=value
  }

  addMeasure(){
    var x=0;
    for(var i =0;i<this.F.length;i++){
      x=this.getMeasure(this.F[i])
      console.log(x)
      this.addProperty('surface',x)
     
      
    }
  }

  valChanged= (e) => {
    console.log(e);
    this.setState({ newVal:e.target.value});
    this.setState({changedKey:e.target.id})
    console.log(this.state.changedKey);
  }

  getInputs(){
    var keys =Object.keys(this.object);
    var jsx=(<div></div>);
    for (var i=0;i<keys.length;i++){
      jsx=(<div>
                {jsx}
                <br/> 
                <Form.Item label={keys[i]}>
                  <Input 
                    id={keys[i]}
                    style={{ width: 200 }} 
                    placeholder={"La nouvelle valeur de "+keys[i]}
                    onChange={(e) => this.valChanged(e)}
                  />
                </Form.Item>
            </div>
          )
    }
    return jsx;
  }

  onTableFeatureSelected(feature){
    console.log(feature.get('id'))
    //console.log(this.state.currentFeature.get('id'))
    this.cF=feature;
    this.setState({currentFeature:this.cF});
    console.log(this.state.currentFeature)
  }
  
  render() {
    const { nomColonne } = this.state;
    const { valeurColonne } = this.state;
    const Option = Select.Option;

    return (
    
      <div>
        <Button type="primary" onClick={this.showDrawer} >
          Table
        </Button>
        <Drawer
          width={640}
          title="Table Attributaire"
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >

        <Modal
          title="Choisissez le type de la colonne :"
          visible={this.state.visible2}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >

        <Select 
          style={{ width: 300 }}
          onChange={this.handleColumnTypeChange}
          defaultValue={this.state.columnType}> 
                  <Option value="Colonne personalisee">Colonne personalisee</Option>
                  <Option value="measure">measure</Option>
        </Select>    
        <br /><br />  
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
          currentFeature={this.cF}
          features={this.F}
          onTableFeatureSelected={this.onTableFeatureSelected}
        />

        <Button type="primary"onClick={this.showModal} >
          Ajouter colonne
        </Button>

        <Button type="primary"onClick={this.showModal2} >
          Modifier
        </Button>
        

        <Modal
          title="Modifier un objet"
          visible={this.state.visible3}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}>
          {this.getInputs()}
        </Modal>
          

        </Drawer>
      </div>
    );
    
  }
  
}
