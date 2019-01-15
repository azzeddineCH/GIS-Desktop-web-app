

export default class MapLayerObject{
    
    constructor(name,type){
        this.name = name; 
        this.type = type;
        this.FeatureProperties={}
        this.Feature={}
        this.features=[]
    }

    getFeatureProperties(){
         Object.assign(this.FeatureProperties,{id: 0})
         return this.FeatureProperties
    }

    getCurrentFeature(){
        return this.Feature;
    }

    getFeatures(){
        return this.features;
    }

}