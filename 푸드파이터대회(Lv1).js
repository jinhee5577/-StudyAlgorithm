function solution(food) {
    let answer = [];
    const outputArr = [];
    
    food.shift();    
    food.forEach((item,i) => {
        if(item > 1) {
          for(let j=1; j <= item/2; j++){
              outputArr.push(i+1);
          }
        }
    });
    
    answer = [...outputArr, 0, ...outputArr.reverse()];
 
    return answer.join('');
}