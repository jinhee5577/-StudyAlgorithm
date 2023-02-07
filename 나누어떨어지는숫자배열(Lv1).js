function solution(arr, divisor) {
    let answer = [];
     
    arr.sort((a, b) => {return a - b;});
    arr.forEach((num) => {
        if(num % divisor === 0){ answer.push(num); }
    });
     
    return answer.length > 0 ? answer : [-1];
 }