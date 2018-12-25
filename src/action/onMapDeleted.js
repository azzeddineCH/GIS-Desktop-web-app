export default function onMapDeleted(path){
   
    return { 
             type : "DELETE_MAP",
             path,     
            }

}