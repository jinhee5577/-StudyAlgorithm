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



// 나의 2번째 풀이
function solution(people, limit) {
   let answer = 0;
   people = people.sort((a,b)=> {return a-b});
   while(people.length){
     let first = people.shift();   
     if(first + people[0] <= limit){
        people.shift();      
     }  
     answer++;
   }

   return answer;
}
// 테스트 케이스만 통과하고 최종은 통과하지 못했다. ㅠㅠ


// 나의 3번째 풀이
function solution(people, limit) {
   let answer = 0;
   people = people.sort((a,b)=> {return a-b});
   
   let j = 1;
   let k = 0; 
   for(let i = 0; i < people.length; i++){
      if(people[i+k] + people[i+j] <= limit){
         j++;
         k++; 
      }
      answer++; 
      if(i+k === people.length - 1){ break; }   
   }
  
   return answer;
}
// 테스트 케이스만 통과하고 최종은 통과하지 못했다. 아진짜 이풀이도 맞는데 왜 통과를 못하냐..ㅠㅠ진짜...
// 왜 틀린지 모르겠다.ㅠㅠ


// 다른사람의 풀이.
function solution(people, limit) {
   let answer = 0;
   people = people.sort((a,b)=>b-a);

   for(let i =0, j = people.length-1; i <= j ; i++ ){
       if(people[i]+people[j] <= limit) j--
       answer++
   }

   return answer;
}

// 이사람 풀이도 이해가 되는데 왜 내풀이는 안되는 걸까??.....
