function solution(x, y, n) {
    // dp를 이용하여 x에서 y까지 가는법 최소 횟수를 찾는다.
    const dp = new Array(y + 1).fill(Infinity); // Infinity는 임의의 가장 엄청큰수 라고 생각.
    dp[x] = 0; // 초기 연산횟수 0부터 시작.
    
    for(let i = x; i <= y; i++){
        // dp[i]부터 각각 dp[i+n](dp[i*2],dp[i*3])까지 가는 방법중 가장 작은 횟수를
        // 각연산방법후 자리에 할당해준다.
        dp[i+n] = Math.min(dp[i+n], dp[i]+1);
        // 기존의 dp[i+n]까지는 오는 횟수와, 현재 인덱스번호(i)에서 해당 연산을 한번 거쳐(그래서 +1해줌) dp[i+n]까진온 횟수와 비교하여 가장 적은 횟수를 목적지(dp[i+n])에 할당해준다. 
        dp[i*2] = Math.min(dp[i*2], dp[i]+1); // 마찬가지
        dp[i*3] = Math.min(dp[i*3], dp[i]+1); // 마찬가지
    }
    
    // 인덱스를 끝까지 돌린후 배열의 마지막 인덱스 이자 최종 목적지인 dp[y]값을 return해준다.
    // dp[y]가 Infinity면 y번째 까지 오는 방법이 없으므로 -1을 return한다.
    return dp[y] !== Infinity ? dp[y] : -1;
 }



 // 부가 설명
 let arr = new Array(4).fill(Infinity);
 arr[6] = Math.min(arr[5], arr[2]+1);

 console.log(arr[6]); // 결과: NaN
 console.log(arr[5]); // 결과: undefined
 console.log(arr[2]+1); // 결과: Infinity
 