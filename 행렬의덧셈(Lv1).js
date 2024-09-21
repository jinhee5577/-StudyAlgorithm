function solution(arr1, arr2) {
    let answer = [];
    
    arr1.forEach((data,i)=>{
        const inner = [];
        data.forEach((num,j)=>{
           inner.push(num + arr2[i][j]);
        });
        answer.push(inner);
    });
    
    return answer;
}