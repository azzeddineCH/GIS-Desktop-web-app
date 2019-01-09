
export default function onNewTopologyChanged(showtopo){
   
    return { 
             type : "CHANGE_TOPOLOGY_STATE",
             showtopo,
            }

}