// 이분탐색으로 최소시간을 구하자.
// 최종 입국심사 풀이 답안.

function solution(n, times) {
   // 시간의 범위를 만들자. 최소시간부터 최대시간 까지 범위를 가정하자. 
   let start = 1;
   let end = n * Math.max(...times);  // 가장오래걸리는 시간으로 모든사람을 심사했을때 최대시간.
   let min = end;  // 초기값으로 가장큰수를 넣어준다.
   
   while(start <= end){
      let mid = Math.floor((start + end) / 2);  // 중간시간.
      let people = times.reduce((pre, cur) => { 
                 return pre + Math.floor(mid / cur);
          // 중간시간을 각심사관 시간으로 나눠주면 인원수가 나옴. 그래서 times배열의 가능 인원수를 다더해준다.
      }, 0);
      
      if(people >= n){ 
         min = Math.min(mid, min);  // 계속 새로운 mid값과 비교하여 최소값을 구한다. 
         end = mid - 1;  // 시간↓ 면 인원수↓, 더낮은 시간범위(왼쪽)으로 이동한다.
      }  
      if(people < n){ start = mid + 1; }  // 시간↑ 면 인원수↑, 더큰 시간범위(오른쪽)으로 이동한다.        
   } 

   return min;
}


// 힌트 ex) 30분: 7명, 31분도: 7명, 32분도; 7명, 33분도: 7명, 34분도: 7명이 나온다.
// 이중 가장 최소시간을 리턴해주면 된다. 




// 나의 첫번째 풀이.
// 이분탐색으로 최소시간을 구하자.

function solution(n, times) {
    let answer = 0;    
    // 시간의 범위를 만들자. 최소시간부터 최대시간 까지 범위를 가정하자. 
    let start = 1;
    let end = n * Math.max(...times);  // 가장오래걸리는 시간으로 모든사람을 심사했을때 최대시간. 
    
    while(start <= end){
       let mid = Math.floor((start + end) / 2);  // 중간시간.
       let people = times.reduce((pre, cur) => { 
                  return pre + Math.floor(mid / cur);
           // 중간시간을 각심사관 시간으로 나눠주면 인원수가 나옴. 그래서 times배열의 가능 인원수를 다더해준다.
       }, 0);
       
       if(people === n){  
          answer = mid;
          break; 
       }
       if(people > n){ end = mid - 1; }  // 시간↓ 면 인원수↓, 더낮은 시간범위(왼쪽)으로 이동한다.
       if(people < n){ start = mid + 1; }  // 시간↑ 면 인원수↑, 더큰 시간범위(오른쪽)으로 이동한다.        
        
    } 

    return answer;
}

// 테스트케이스만 통과 최종에서 답이 다틀린다 ㅠㅠ.  왜 틀리냐 ㅠㅠ.