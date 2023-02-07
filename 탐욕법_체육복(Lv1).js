function solution(n, lost, reserve) {
    let lostFilter = lost.filter((L) => {return !reserve.includes(L);});  // 도난당한애가 여벌있는 애들은 제외.  
    let reserveFilter = reserve.filter((R) => {return !lost.includes(R);});  // 여벌애중 도난당한 애들은 제외.
    let answer = n - lostFilter.length;  // 초기 체육수업 들을수 있는 인원.
        lostFilter = lostFilter.sort((a,b) => {return a-b;});
        reserveFilter = reserveFilter.sort((a,b) => {return a-b;});    
    
    for(let i = 0; i < lostFilter.length; i++){
      if(reserveFilter.includes(lostFilter[i] - 1) || reserveFilter.includes(lostFilter[i] + 1)){
         answer++; 
         reserveFilter.shift(); 
      }        
    }  
    
    return answer;
}