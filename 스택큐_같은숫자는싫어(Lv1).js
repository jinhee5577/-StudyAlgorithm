function solution(arr){    
    let answer = [];    
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i+1]){  // 앞뒤 연속으로 비교.
           answer.push(arr[i]);  // 앞에걸 push해준다.
        }
    }    
 
    return answer;
}