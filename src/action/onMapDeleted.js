export default function onMapImported(path){
   
    return { 
             type : "DELETE_MAP",
             path,     
            }

}