// 첫번째 작성한 문제풀이 => 잘풀리다 후반부에서 시간초과 발생.
// 다시 생각을 해보자.

function solution(numbers) {
    let answer = [];
    
    while(numbers.length){
        const first = numbers.shift();
        
        if(numbers.length > 0){
           for(let i=0; i<numbers.length; i++){
               if(first < numbers[i]){
                  answer.push(numbers[i]);
                  break;
               }
               if(i == numbers.length-1){
                  if(first > numbers[numbers.length-1]){
                     answer.push(-1);
                  }
               }   
           }            
        } else { answer.push(-1); }        
    }
    
    return answer;
}