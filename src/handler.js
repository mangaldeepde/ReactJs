export let exist=()=>{
 if(localStorage.getItem("winnerTime")){
    return true
 }
 else{
    return false
 }
}
export let getValue=()=>{
    return JSON.parse(localStorage.getItem("winnerTime"))
}

export let setValue=(obj)=>{
    let newObj=JSON.stringify(obj)
    localStorage.setItem("winnerTime" , newObj)
}

export let winner=(obj)=>{
  let prevValue=getValue()

  const m=prevValue.m
  const s=prevValue.s
  const ms=prevValue.ms
  const h=prevValue.h
  if(ms===obj.ms && s===obj.s && m===obj.m && h===obj.h){
    return true;
  }
  if(obj.h>h){
    return false
  }
  else if(h===obj.h){
    if(m>obj.m) 
    {
        return true
    }
    else if(m===obj.m){
        if(s>obj.s){
            return true
        }
       else if(s===obj.s){
            if(ms>obj.ms){
                return false
            }
            else{
                return true
            }
        }
        else{
            return false
        }
    }
    else 
        return false
    }
    else{
        return true
    }
     
    
  }




