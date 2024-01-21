function solution(number) {
    let answer = 0
    
    for(let i =0; i< number.length; i++){
       for(let j =  i+1; j < number.length; j++){
          for(let h = j+1; h < number.length; h++){
              if(number[i] + number[j] + number[h] == 0){
                 answer++;
              }
          }
       } 
    }
    
    return answer;
}