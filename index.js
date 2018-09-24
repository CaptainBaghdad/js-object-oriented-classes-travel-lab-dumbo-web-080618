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
    
    console.log(end.length);
  } 
 
 
 
  
 
 
}
