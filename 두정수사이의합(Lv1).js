function solution(a, b) {
    let sum = 0;
    let big = 0;
    let small = 0;
    
    if(a == b){return a;}
    if(a < b){ big = b; small = a; }
    else { big = a; small = b; }
    for(let i = small; i <= big; i++){
        sum += i;
    }
    return sum;
}


// 더 간단한 답
function solution(a, b) {
    let sum = 0;
    
    if(a == b){return a;}
    for(let i = Math.min(a,b); i <= Math.max(a,b); i++){
        sum += i;
    }    
    return sum;
}