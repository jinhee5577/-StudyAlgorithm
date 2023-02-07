// final 나의 풀이
function solution(k, tangerine) {
    let answer = 0;
    let obj = {};  // Hash
    
    tangerine.sort((a, b) => {return a - b;});
    tangerine.forEach((size, i) => { 
       obj[size] = obj[size] + 1 || 1;
    });
    
    let objVal = Object.values(obj).sort((a, b) => {return b - a;});
    let sum = 0;
    for(let i = 0; i < objVal.length; i++){ 
        answer++;
        sum += objVal[i];
        if(sum >= k){ break; }
    }
    
    return answer;
}



// 첫번째 나의 풀이
function solution(k, tangerine) {
    let answer = 0;
    let obj = {};
    
    tangerine.sort((a, b) => {return a - b;});
    tangerine.forEach((size, i) => { 
       if(tangerine[i] === tangerine[i + 1]){  // 내가 중복이 없는 경우를 다 제외시켰다.(이게문제)
          obj[size] = obj[size] + 1 || 2;
       } 
    });
    
    let objVal = Object.values(obj).sort((a, b) => {return b - a;});
    let sum = 0;
    for(let i = 0; i < objVal.length; i++){ 
        answer++;
        sum += objVal[i];
        if(sum >= k){ break; }
    }
    
    return answer;
}