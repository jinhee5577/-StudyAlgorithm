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