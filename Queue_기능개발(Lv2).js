function solution(progresses, speeds) {
    var answer = [];
    let daymap = progresses.map((item, i) => { 
        let x = 0;
        while(item < 100){
            item += speeds[i];
            x++;
        }
        return x;
    })
     let c = 1;   
     let now = daymap[0];
     daymap.shift();
     daymap.forEach((ele) => { 
         if(now >= ele){ c++; }
         if(now < ele) { 
               answer.push(c);  // 다음으로 넘와서 push시킨다.
               now = ele; c = 1; }
           })
     answer.push(c);  
     return answer;
}