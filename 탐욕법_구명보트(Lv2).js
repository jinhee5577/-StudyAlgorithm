// 나의 첫번째 풀이
function solution(people, limit) {
    let answer = 0;
    people = people.sort((a,b) => {return a-b;});
     
    while(people.length){
       let first = people.shift();   
       if(limit - first >= 40){
          let Ind = people.findIndex((w) => { return w <= limit - first; });  // 어차피 하나만 뱉음.
          if(Ind >= 0){  // Ind가 나온다면 0보다 크거나 같음로.
             people.splice(Ind, 1);
             answer++; 
          } else { answer++; } 
       } else { answer++; }  
    }    
 
    return answer;
 }


// 테스트 케이스만 통과하고 최종은 통과하지 못했다.
// 다시 생각해보자.