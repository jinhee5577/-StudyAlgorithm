function solution(arr) {
    let answer = [];
    let min = Math.min(...arr);
    let ind = arr.findIndex((n) => {return n == min;});
    arr.splice(ind, 1);
    answer = arr;

    if(answer.length){ return answer; }
    else { return [-1]; }
}