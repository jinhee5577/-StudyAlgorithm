function solution(n){
    let answer = 0;
    n = String(n).split('').map((a) => {return Number(a);});
    answer = n.reduce((pre, cur) => {
                return pre + cur;  
             }, 0);
 
    return answer;
}