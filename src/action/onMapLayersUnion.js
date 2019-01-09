
export default function onMapLayersUnion(TopologyName,FirstFeaturelayername,FirstFeatureId,SecondFeaturelayername,SecondFeatureId){
    return { 
                type : "UNION",
                TopologyName,
                FirstFeaturelayername,
                FirstFeatureId,
                SecondFeaturelayername,
                SecondFeatureId
            }
         
           
}