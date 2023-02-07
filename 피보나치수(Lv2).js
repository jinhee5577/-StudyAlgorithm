// 동적계획법과 메모이제이션 으로 풀어야한다.
// 피보나치수열 배열을 만든다.

function solution(n) {
    let DP = [0, 1];
     
    for(let i = 2; i <= n; i++){
        DP[i] = (DP[i - 1] + DP[i - 2]) % 1234567;        
    }   
    
    return DP[n]; 
}



