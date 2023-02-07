function solution(n) {
    let answer = [];
    let Narr = String(n).split('');  // []로 만들어줌.

    for(let i = Narr.length - 1; i >= 0; i--){
        answer.push(Number(Narr[i]));        
    }
    
    return answer;
}