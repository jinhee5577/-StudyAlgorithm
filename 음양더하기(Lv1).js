function solution(absolutes, signs) {
    let sum = 0;
    
    absolutes.forEach((e, i) => {
        if(signs[i] == true){
            sum += e;            
        } else if(signs[i] == false){
            e = -1 * e;
            sum += e; 
        }
    });

    return sum;
}