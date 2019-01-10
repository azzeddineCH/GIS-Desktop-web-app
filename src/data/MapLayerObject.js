

export default class MapLayerObject{
    
    constructor(name,type){
        this.name = name; 
        this.type = type;
        this.FeatureProperties={}
        this.style = null;
    }

    getFeatureProperties(){
         Object.assign(this.FeatureProperties,{id: 0})
         return this.FeatureProperties
    }


    setStyle(style){
        this.style = style;
    }

    getStyle(style){
        return this.style;
    }

    

}