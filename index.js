class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date (startDate);
    
  }
  
 yearsExperienceFromBeginningOf(endDate){
   

 return parseInt(endDate) -  parseInt(this.startDate.getFullYear()) -1;
  
   
 }
  
}

class Route {
  constructor(start, end){
    this.start = start;
    this.end = end;
    
    console.log(typeof end);
  } 
 
 
 blocksTravelled(){
   let e ;
   let s;
   
  for(let key in this.end){
   e = key.vertical;
   console.log(e);
    
  }
  
 }
 
}
