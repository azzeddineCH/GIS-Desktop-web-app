import React from 'react';
import { Modal,Input,message,Select,Row,Col,Cascader,} from 'antd';
import 'antd/dist/antd.css';
import { isNullOrUndefined } from 'util';

export default class NewTopology extends React.Component {

  constructor(props) {

    super(props);
    this.Submit = this.Submit.bind(this)
    this.Cancel = this.Cancel.bind(this)
    this.topologyNameChange = this.topologyNameChange.bind(this)
    this.firstFeatureChange = this.firstFeatureChange.bind(this)
    this.secondFeaturechange = this.secondFeaturechange.bind(this)
    this.operationChange=this.operationchange.bind(this)
    var name="";
    if ((this.props.store.map != null)&&(this.props.store.map != undefined))
    {
      if (this.props.store.map.getLayers().getArray().length > 0)
       {name=this.props.store.map.getLayers().getArray().filter(element=>{return (element.get('name') != 'sketch' &&  element.get('name') != 'map')
        })[0].get('name');
      }
    }  
    this.state = {
        TopologyName: "default name",
        FirstFeaturelayername:name,
        FirstFeatureId:0,
        SecondFeaturelayername:name,
        SecondFeatureId:0,
        Operation:"Intersection"
    }
  }


    Submit(){  
      var topoType;
    const {TopologyName,FirstFeaturelayername,FirstFeatureId,SecondFeaturelayername,SecondFeatureId,Operation} = this.state
    var topologyAlreadyExist=false;
    var tabTopo = this.props.store.map.getLayers().getArray().filter(element=>{return (element.get('toponame') =='topology')});
    if (tabTopo.length>0){
          topologyAlreadyExist = tabTopo.some((el)=>{
            return el.get("name") === TopologyName;
        })
      }

        if(topologyAlreadyExist){
            message.error('topology layer name already exist');
        }
        else{
          //console.log(this.state.TopologyName,this.state.FirstFeaturelayername,this.state.FirstFeatureId,this.state.SecondFeaturelayername,this.state.SecondFeatureId,this.state.Operation);
          if (Operation =="Intersection")
            this.props.onMapLayersIntersect(TopologyName,FirstFeaturelayername,FirstFeatureId,SecondFeaturelayername,SecondFeatureId);
            else 
            { 
              if (Operation =="Union")
                {this.props.onMapLayersUnion(TopologyName,FirstFeaturelayername,FirstFeatureId,SecondFeaturelayername,SecondFeatureId);
                }
                else 
                {
                   if (Operation =="Difference"){ this.props.onMapLayersDiff(TopologyName,FirstFeaturelayername,FirstFeatureId,SecondFeaturelayername,SecondFeatureId);}
                   else {
                    this.props.onMapLayersSemiDiff(TopologyName,FirstFeaturelayername,FirstFeatureId,SecondFeaturelayername,SecondFeatureId);
                   }

                }
            }  
          this.props.onMapLayersAddTopology(TopologyName,"default");
          this.Cancel();
        }
      }  
        
    Cancel(){

        this.props.onNewTopologyChanged(false);
    }

    topologyNameChange(e){  
        this.setState({
            TopologyName: e.target.value
          });
    }
    
    firstFeatureChange = (value) => {
      console.log(value);
      this.setState({
        FirstFeatureId:value[1],
        FirstFeaturelayername:value[0]
      });
    }

  
   secondFeaturechange = (value) => {
    console.log(value);
    this.setState({
      SecondFeatureId:value[1],
      SecondFeaturelayername:value[0]
    });
  }
    operationchange(value){  
        this.setState({
            Operation: value
          });
    }

  render() {
   
    var treeElement,childrenElement;
    var treeData=[];
    var child=[];
    if ((this.props.store.map != null)&&(this.props.store.map != undefined))
    {
    this.props.store.map.getLayers().getArray().filter(element=>{return (element.get('name') != 'sketch' &&  element.get('name') != 'map' && element.get('toponame') != 'topology')
     }).forEach(function (lyr) {  
      var features=lyr.getSource().getFeatures().map((feature,index)=>{
        feature.set("ID",index);
        return feature
              });
         features.forEach(function (e){
         childrenElement={ label:'feature'+e.get("ID"),value:e.get("ID"),key:e.get("ID") } ;  
         child.push(childrenElement);
        });
        treeElement={label:lyr.get('name'),disable:'true',value:lyr.get('name'),key:lyr.get('name'),children:child};
        treeData.push(treeElement);
        child=[];
         });
    }
    var secondtreeData = treeData;
    const Option = Select.Option ; 
    return(
        <div>
        <Modal
          title="Add a new topology "
          okText="AddTopology"
          visible={this.props.store.newTopologyState}
          onOk={this.Submit}
          onCancel={this.Cancel}
        >           <label for="test">Enter the topoloy layer name: </label>
                   <Input
                        type="text"
                        onChange={this.topologyNameChange}
                        placeholder="Topology layer name"
                        defaultValue = "default name"
                        style={{ width: '50%', marginRight: '3%' }}
                    />
                  <br /><br />  
                  <label for="test">Select two features : </label>
                  <br />
                    <Row gutter={8}>
                     <Col span={12}>
                      <Cascader
                       options={treeData}
                       expandTrigger="hover"
                       onChange={this.firstFeatureChange}
                       placeholder="Please select the first feature"  
                       style={{ width: '100%', marginRight: '3%' }}
                       />,
                     </Col>
                     <Col span={12}>
                      <Cascader
                       options={secondtreeData}
                       expandTrigger="hover"
                       onChange={this.secondFeaturechange}
                       placeholder="Please select the second feature"
                       style={{ width: '100%', marginRight: '3%' }}
                       />,
                     </Col>
                     </Row>
                    <br /> 
                    <label for="test">Select the operation : </label>
                    <Select 
                       style={{ width: 200 }}
                       onChange={this.operationChange}
                       defaultValue={this.state.Operation}> 
                       <Option value="Intersection">Intersection</Option>
                       <Option value="Union">Union</Option> 
                       <Option value="Difference">Difference</Option>  
                       <Option value="SemiDifference">Symmetric Difference</Option>  
                    </Select>
                    <br />
           
        </Modal>
      </div>
    );
  }
}
