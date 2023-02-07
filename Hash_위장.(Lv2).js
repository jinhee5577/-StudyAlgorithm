function solution(clothes) {
    let answer = 1;
    let obj = {};    
    
    clothes.forEach((item) => {
          obj[item[1]] = (obj[item[1]] || 0) + 1;  
     })
    
    for(let key in obj){
        answer *= (obj[key] + 1); 
    }
  
    return answer - 1;
}