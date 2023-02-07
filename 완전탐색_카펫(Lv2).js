function solution(brown, yellow) {
    let answer = [];
    // brown 이 8이상 이므로
    // 테두리 1줄은 꼭 갈색
    let x = 3;   // 가로 초기값 
    let y = 3;   // 세로 초기값
    
    // 1번째 방법
    while(x >= y){
       if((brown + yellow) % y === 0){
           x = (brown + yellow) / y;   // 가로
           if((x-2) * (y-2) === yellow){
              answer = [x, y]; 
              break; 
           }           
       } 
       y++; x++;      
    }      
    
    // 2번째 방법
    for(let h = 3; h < (brown + yellow) / 2; h++){
        if((brown + yellow) % h === 0){
           x = (brown + yellow) / h;   // 가로
           if((x-2) * (h-2) === yellow){
              answer = [x, h]; 
              break; 
           }           
        }         
    }    
    
    return answer;
}