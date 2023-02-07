// 나의풀이
function solution(numbers, target) {
  let answer = 0;
  let legnth = numbers.length;
  
  function dfs(ind, sum){
     if(ind < legnth){  // 다음 함수호출 할때를 위해 ind + 1 해준다.
        dfs(ind + 1, sum + numbers[ind]);   // + 경우일때.
        dfs(ind + 1, sum - numbers[ind]);   // - 경우일때.    
     } else {  // base case.
         if(sum === target){ answer++; }
         return 
     }
  }
  
  dfs(0, 0);   // 0부터 호출해서 시작해준다.  
  return answer;
}




// 또 다른사람의 풀이.
function solution(numbers, target) {
    let answer = 0;
    const length = numbers.length;
  
    function dfs(count, sum) {
      if (count === length) {
        if (target === sum) {
          answer++;
        }
        return;
      }
  
      dfs(count + 1, sum + numbers[count]);
      dfs(count + 1, sum - numbers[count]);
    }
  
    dfs(0, 0);
  
    return answer;
}
  

// 출처: https://yong-nyong.tistory.com/41