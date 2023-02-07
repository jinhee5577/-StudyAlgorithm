// 동적계획법과 메모이제이션으로 풀어야한다.
// 힌트 : 피보나치수열.
function solution(n) { 
    return fibonacci(n);
}

let fibonacci = (n) => { 
    let memo = new Array(n+1).fill(0);  // 메모이제이션 배열.
    memo[0] = 1; memo[1] = 1;
    
    for(let i = 2; i <= n; i++){
        memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;        
    }
    
    return memo[n]; 
};
    



// 나의 첫번째 풀이(틀림).
function solution(n) {
    let answer = 0;
    let binary = (n / 2) >> 0;  // 2의 갯수
    
    if(n % 2 == 1){
       for(let i = binary; i >= 0; i--){
           answer += i + 1;                
       } 
    } else if(n % 2 == 0){
         answer++;
         for(let i = binary - 1; i >= 0; i--){
             answer += i + 1; 
         }
    }

    return answer;
}