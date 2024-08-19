function solution(storey) {
    let answer = 0;
    
    while(storey > 0){
       let now = storey % 10; // 현재 자리수.
       let next = Math.floor(storey / 10) % 10; // 다음 자리수.
 
       if(now > 5){
          answer += 10 - now;
          // 다음 자리수를 만들기위해 반올림+1해주고 여기선(10) 나눈 몫값이 남은 앞자리숫자임.
          storey = Math.floor((storey + 10) / 10); 
       } else if(now == 5){
          // 다음자리수가 5보다 크면 반올림 해주고, 작다면 해줄 필요없음. 다음 실행할 앞자리수를 만들어서 재할당함.
          storey = next >= 5 ? Math.floor((storey + 10) / 10) : Math.floor(storey / 10); 
          answer += 5;
       } else if(now < 5){
          answer += now;
          storey = Math.floor(storey / 10);
       }
    }
    // 생각의 시각을 달리해야 풀리는 문제였다. 그래서 조금 해맸다.
    return answer;
}