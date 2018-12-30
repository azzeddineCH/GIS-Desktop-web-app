export default function deleteMapLayer(state,action){
 
    const name = action.layerName
    var layer = state.getLayers().getArray().filter(element=>{
        return element.getProperties().name == name
    })[0]

    var newMap = Object.assign( Object.create( Object.getPrototypeOf(state)), state)
    newMap.removeLayer(layer)
    return newMap 

}
