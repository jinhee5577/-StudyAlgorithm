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


// 정확성은 통과했지만 효율성은 불통과함.
function solution(triangle) {
   // const copy = [...triangle]; 2차원 이상은 deep copy가 안됨.
    const copy = JSON.parse(JSON.stringify(triangle));  // 이방법으로 하면 deep copy가 됨.
    
    for(let i = 0; i<=triangle.length-2; i++){
        for(let j=0; j<=triangle[i].length-1; j++){
            triangle[i+1][j] = Math.max((triangle[i][j]+copy[i+1][j]), triangle[i+1][j]);  // 아래왼쪽
            triangle[i+1][j+1] = triangle[i][j] + copy[i+1][j+1];  // 아래오른쪽
        }
    }
    
    console.log(copy);
    console.log(triangle);
    return Math.max(...triangle[triangle.length-1]);
}


// 이방법으로 풀면 효율성까지 통과됨.
// 생각을 뒤집어서 맨아래부터 위아래 더한값중 큰수를 부모자리 수로 갈아치운다.
function solution(triangle) {
    for(let i = triangle.length-2; i>=0; i--){
        for(let j=0; j<triangle[i].length; j++){
            triangle[i][j] = Math.max((triangle[i][j]+triangle[i+1][j]), (triangle[i][j]+triangle[i+1][j+1]));
        }
    }
    
    return triangle[0][0];
}