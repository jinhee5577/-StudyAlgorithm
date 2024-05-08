function solution(ingredient) {
    // 스택을 이용해서 풀면 된다.
    
    const stack = [];
    let count = 0;
    
    ingredient.forEach((data) => {
        stack.push(data);
        
        if(stack.length >= 4){
            const bergerlist = stack.slice(-4).join("");  
            
            if(bergerlist == "1231"){
                count++;
                stack.splice(-4);
            }
        }
        
    });
    
    
    return count;
}