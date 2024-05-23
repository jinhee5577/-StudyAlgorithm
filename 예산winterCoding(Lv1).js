function solution(d, budget) {
    let answer = 0;
    //  많은 부서를 지원하기 위해서는 금액이 적은 부서부터 먼저 지원해주어야 함.
    //  따라서 오름 차순 정렬.
    d.sort((a, b) => {return a - b; });
    
    for(let i=0; i < d.length; i++){
       if(d[i] > budget){ break; }
        
       budget -= d[i];
       answer++;        
    }    
    
    return answer;
}