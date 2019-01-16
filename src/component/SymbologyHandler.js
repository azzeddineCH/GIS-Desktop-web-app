import React from 'react';
import { Select, Table,Button} from 'antd';
import 'antd/dist/antd.css';
import ColorScalePicker from "./ColorScalePicker";
import AddRemoveItemDialog from "./AddRemoveItemDialog";


export default class SymbologyHandler extends React.Component {



    constructor(props) {
        super(props);
        const viridisColorscale = ['#fafa6e', '#9cdf7c', '#4abd8c', '#00968e', '#106e7c', '#2a4858'];
        this.state ={
            Layer : "1st layer",
            selectedColumn : 'ID',
            colorScale : viridisColorscale,
            data : null,
            visibleDialog : false,
        };

        this.getColumns = this.getColumns.bind(this);
        this.getFeatures = this.getFeatures.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getData = this.getData.bind(this);
        this.setColorScale = this.setColorScale.bind(this);
        this.onAddAll = this.onAddAll.bind(this);
        this.onRemoveAll = this.onRemoveAll.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onHide = this.onHide.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    

    setColorScale(colorScale){
        console.log(colorScale);
        this.setState({
            colorScale : colorScale,

        });
    }
     
    handleChange(value) {
        this.setState({
            selectedColumn :value.key,
        });

    }

    getFeatures(){
        const features= this.props.store.map.getLayers().getArray().filter(element=>{
            return element.getProperties().name === this.props.store.layersTree.slectedMapLayer.name;
        })[0].getSource().getFeatures();

        return features;
     }

    getColumns(){

        let options = [];
        const Option = Select.Option;
        var columns = this.getFeatures()[0].getKeys().map((element)=>{
            if (element=='ID'|| element=='Measure'){
                return{
                    key: element,
                    title:element,
                }
            }
            else  return{
                    key: element,
                    title:element,
                }
            })
            for (var i=0; i<columns.length; i++) {
                if(columns[i].title!="geometry")
                options.push(<Option  
                                key ={columns[i].key} 
                                value={columns[i].title}>
                                    {columns[i].title}
                                </Option>); 
            }
        return options;
    }

    getData(){

        let data = [];
        var exists = null;
        let references = [];
        const features = this.getFeatures();
        features.forEach(element => {
            references = features.filter(ele=>{
                
                return element.get(this.state.selectedColumn) === ele.get(this.state.selectedColumn);
            });
            exists = data.filter(dataEle =>{
                return dataEle.key === element.get(this.state.selectedColumn);
            });
            if(exists.length===0)
                data.push({
                        key: element.get(this.state.selectedColumn),
                        Count: references.length,
                        ref : references,
                }); 
            else exists = null;
            references = [];
    
        });
        return data;
    }

    onAddAll(){

        console.log(this.state.selectedColumn);
        this.setState({
            data: this.getData(),
        });
        console.log(this.state.data);
        setTimeout(function() {
            this.props.action(this.state.data, this.state.colorScale);
        }.bind(this), 300);
        
    }

    onRemoveAll(){
        this.setState({
            data: null,
        });
        console.log(this.state.data);
        setTimeout(function() {
            this.props.action(this.state.data, this.state.colorScale);
        }.bind(this), 300);
    }


    onAdd(){
        this.setState({
            visibleDialog:true,
            AddState : true,
        });
    }

    onHide(){
        this.setState({
            visibleDialog:false,
        });
        setTimeout(function() {
            this.props.action(this.state.data, this.state.colorScale);
        }.bind(this), 300);
    }

    onSubmit(data){

        console.log(data);
        this.setState({
            data : data,
        });
    }

  
    render() {

    
        const columns = [{
            title: this.state.selectedColumn,
            dataIndex: "key",
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: 'Count',
            dataIndex: 'Count',
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
            this.getFeatures().length>0 ?
                
                <div> 
                <div className="flex_div">
                    <Select labelInValue defaultValue={{ key: 'ID' }} style={{ width: 120 }} onChange={this.handleChange}>
                        {this.getColumns()}
                    </Select>

                    <ColorScalePicker action ={this.setColorScale}  />
                </div>

                <Table className="tab" 
                        rowSelection={rowSelection} 
                        columns={columns} 
                        dataSource={this.state.data} 
                        pagination={{ pageSize: 2 }} />

                <div className="flex_div">
                    <Button type="primary" onClick = {this.onAdd} >Add</Button>
                    <Button type="primary" onClick = {this.onAddAll}>Add All</Button>
                    <Button type="primary" onClick = {this.onRemoveAll} >Remove All</Button>
                </div> 
                <AddRemoveItemDialog {...this.props} 
                            visible ={this.state.visibleDialog} 
                            OnHide = {this.onHide}
                            OnSubmit = {this.onSubmit}
                            data = {this.getData} />
            </div>   
                
                
                :<h1 className="panel_title">No features</h1>
            
           
        );
    }

}
