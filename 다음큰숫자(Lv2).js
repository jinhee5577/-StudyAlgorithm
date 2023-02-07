function solution(n) {
    let changeN = n.toString(2).split('');  // 2진수로바꿈(문자열2진수로 반환).
    let one = 0;  // 1이 나온갯수.
    let nextN = n + 1;
    let nextNarr = []; 
    let nextOne = 0;  // 다음n의 1이 나온갯수.
    
    for(let i = 0; i < changeN.length; i++){
       if(changeN[i] === '1'){ one++; } 
    }
    
    while(one !== nextOne){
      nextNarr = nextN.toString(2).split(''); 
      nextNarr.forEach((a) => {  
        if(a === '1'){ nextOne++; }
      });
      if(one !== nextOne){
         nextN++;
         nextOne = 0;     
      } else { break; }       
    }
    
    return nextN;
    
    // while(changeN > 1){     
    //   if(changeN % 2 === 1){ one++; }
    //   changeN = (changeN / 2) >> 0;     
    // }
    // one++;    
}