function solution(n) {
    var answer = 0;
    n = String(n).split('').map((a) => { return Number(a); });
    answer = Number(n.sort((a, b) => { return b - a; }).join('')); 
    
    return answer;
}