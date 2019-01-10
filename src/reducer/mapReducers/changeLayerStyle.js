

export default function changeLayerStyle(state, action){
 
       const { layerName, style  } = action  ;

       
        var Map = Object.assign( Object.create( Object.getPrototypeOf(state)), state);
        

       Map.getLayers().forEach(element => {
           
            if(element.get("name")==layerName){
                
                element.setStyle(style);
                console.log(element.getStyle());

            } 
            
        });
        

        
        
       return Map;
  
}