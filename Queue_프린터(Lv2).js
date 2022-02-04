function solution(priorities, location) {
    var answer = 0;
    let newmap = priorities.map((item, i) => { return { id : i, ele : item }; });
    let outprint = [];
    
    while(newmap.length > 0) {
        let first = newmap.shift();    
        if(newmap.some((item) => { return item.ele > first.ele})){
            newmap.push(first);
        } else {
            outprint.push(first);   // 이게진짜 결과값이 들어있는 array!
        }
      answer = outprint.findIndex((item) => { return item.id === location; }) + 1; 
    }
    
    return answer;
}