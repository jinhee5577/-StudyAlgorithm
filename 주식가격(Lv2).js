function solution(prices) {
    // 나의 기존 풀이
    const timeArr = [];
        
    while(prices.length) {
      const first = prices.shift();
      let time = 0;
        
      for(let i=0; i < prices.length; i++) {
         time++;
         if(first > prices[i]) { 
            break;
         }
      }
        
      timeArr.push(time);
    }
    
    return timeArr;
}


// 나의 2번째 풀이
function solution(prices) {
    const timeArr = new Array(prices.length).fill(0);
    
    let sp = 0;
    
    while(prices.length) {
      const first = prices.shift();
      // 이걸 prices.length만큼 반복하면, 전체 시간복잡도가 O(N²)를 넘어 O(N³) 가까이 될수 있음.
      // 반복문 안에서 shift()를 쓰는 것이 심각한 성능 저하를 일으키는 원인
      
      for(let i=0; i < prices.length; i++) {
         timeArr[sp]++;
         
         if(first > prices[i]) { 
            break;
         }
      }
        
      sp++;  
    }
    
    return timeArr;
}


// 3번째 나의 풀이
function solution (prices) {
    const timeArr = new Array(prices.length).fill(0);
    
    for(let i=0; i< prices.length; i++) {
       for(let j = i+1; j < prices.length; j++){
           timeArr[i]++;
           
           if (prices[i] > prices[j]) { break; }
       }   
    }
    
    return timeArr;
};
