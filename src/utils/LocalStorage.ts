import { listing } from "../data/data";

export const saveDataToLocalStorgae=(key:string,data:any)=>{

  let isDataExsist  = JSON.parse(localStorage.getItem(key) as any);
  
  if(isDataExsist){
 
    if(data){
      localStorage.setItem(key,JSON.stringify(data));
    }
  return 

}else {
  localStorage.setItem("information",JSON.stringify(listing));
}
}

export const getDataFromLocalStorage=(key:string)=>{
    
  const data = JSON.parse(  localStorage.getItem(key) as string );

  if(!data){

    return null
}else{
      return data

  }
}