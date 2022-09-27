function solution(arr) {
    let answer = 0;  // 초기값.
    
    arr.forEach((num, i) => { 
       answer += num; 
    });   
    
    return answer / arr.length;
}