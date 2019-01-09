
export default function onMapLayersDiss(TopologyName,FirstFeaturelayername,FirstFeatureId,SecondFeaturelayername,SecondFeatureId){
    return { 
                type : "DIFF",
                TopologyName,
                FirstFeaturelayername,
                FirstFeatureId,
                SecondFeaturelayername,
                SecondFeatureId
            }
         
           
}