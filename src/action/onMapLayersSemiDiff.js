
export default function onMapLayersSemiDiff(TopologyName,FirstFeaturelayername,FirstFeatureId,SecondFeaturelayername,SecondFeatureId){
    return { 
                type : "SEMIDIFF",
                TopologyName,
                FirstFeaturelayername,
                FirstFeatureId,
                SecondFeaturelayername,
                SecondFeatureId
            }
         
           
}