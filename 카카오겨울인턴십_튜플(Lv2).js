function solution(s) {
    let answer = [];
    const newarr = JSON.parse(s.replace(/{/g, "[").replace(/}/g,"]"));
    newarr.sort((a,b) => {return a.length - b.length;});
    // 	[[ 2 ], [ 2, 1 ], [ 2, 1, 3 ], [ 2, 1, 3, 4 ]] 이렇게 변경.
    console.log(newarr);
    newarr.forEach((arr, i) => {
        answer.push(...arr);
    });
    
    const tuple = new Set(answer); // 중복 제거
    console.log(tuple);
    
    return [...tuple];
}