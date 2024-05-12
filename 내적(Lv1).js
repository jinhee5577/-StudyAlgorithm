function solution(a, b) {
    let answer = 0;
    
    a.forEach((ele, i) => {
       answer += ele * b[i];
    });
    
    
    return answer;
}