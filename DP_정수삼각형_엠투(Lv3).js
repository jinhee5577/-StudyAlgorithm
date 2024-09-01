// 나의 풀이 대각선 자식으로 내려갈때 좌,우 비교해서 큰수쪽으로 내려가도록 알고리즘 작성.
// 계획대로 로직 구성과 값은 나왔지만 답과는 틀리다. 좀더 생각해 보자.
function solution(triangle) {
    let index = 0;
    const dp = [triangle.shift()[0]];
    
    triangle.forEach((arr, ind) => {
        if(arr[index] > arr[index+1]){
           dp.push(arr[index]);
        } else if (arr[index] < arr[index+1]){
           dp.push(arr[index+1]);
           index = index+1;  // 다음 index번호로 바까줌.
        } else if (arr[index] == arr[index+1]){ //좌, 우 값이 같을때
            dp.push(arr[index]);
            // 다음 index번호로 바까줌.
            if(triangle[ind+1][index] > triangle[ind+1][index+2]){index = index}
            else {index = index+1}
        }
    });
    
    console.log(dp);
    const sum = dp.reduce((pre,curr) => {
         return pre + curr;
    },0);
    
    return sum;
}