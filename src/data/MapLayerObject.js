

export default class MapLayerObject{
    
    constructor(name,type){
        this.name = name; 
        this.type = type;
        this.FeatureProperties={}
    }

    getFeatureProperties(){
         Object.assign(this.FeatureProperties,{id: 0})
         return this.FeatureProperties
    }

}