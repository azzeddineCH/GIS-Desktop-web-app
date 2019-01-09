
export default function onMapLayersIntersect(TopologyName,FirstFeaturelayername,FirstFeatureId,SecondFeaturelayername,SecondFeatureId){
    return { 
                type : "INTERSECT",
                TopologyName,
                FirstFeaturelayername,
                FirstFeatureId,
                SecondFeaturelayername,
                SecondFeatureId
            }
         
           
}