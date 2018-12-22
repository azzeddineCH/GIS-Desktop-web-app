/**
 * this is an example of a redux action:
 *        - take as a in-parameter: an object
 *        - return an object continaing the in-parameter joined by an ID (@type)
 *      
 * 
 */

export default function dummy_action(message){
   
        return { 
                 type : "DUMMY_ACTION",
                 message,     
                }
  
  }