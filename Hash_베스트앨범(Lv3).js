function solution(genres, plays) {
    let answer = [];
    let obj = {};
    let new_genres =  genres.map((ele, i) => { 
               return { id : i, kind : [ele, plays[i]] }; 
           });
        new_genres.forEach((item, i) => { 
                 if(obj.hasOwnProperty(item.kind[0])){
                   obj[item.kind[0]][item.id] = item.kind[1];
                 } else {
                   obj[item.kind[0]] = { [item.id] : item.kind[1] };
                 }             
             });      
    let obj_val = Object.values(obj);       
        obj_val.sort((a, b) => {
                 return (Object.values(b).reduce((p,c) => {return p + c;},0) - Object.values(a).reduce((p,c) => {return p + c;},0));
             });      
    let last = obj_val.map((item) => { return Object.entries(item); });     
        last = last.map((arr) => {
                   arr.sort((a,b) => {return b[1] - a[1];})
                   return arr;
               });
    for(let ele of last){
        for(let i = 0; i < 2; i++){
              answer.push(Number(ele[i][0]));
           }            
        }        
   return answer;
}