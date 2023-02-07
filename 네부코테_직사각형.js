// 문제 : let v = [[1,4],[3,4],[3,10]];  let v2 = [[1,1],[2,2],[1,2]];  
//        각원소의 x좌표, y좌표 이고 나머지 한점의 좌표를 return 하라! 
//        1번째 result = [1, 10]; 2번째 result = [2, 1]; 이다.


function solution(){
    let answer = [];
    let v = [[1,4],[3,4],[3,10]];
    let v2 = [[1,1],[2,2],[1,2]];
    let obj = {};        

    v2.forEach((item, i) => {
        // obj[item[0]] = (obj[item[0]] || 0) + 1;
        // obj[item[1]] = (obj[item[1]] || 0) + 1;
        
        if(obj.hasOwnProperty([`x${item[0]}`])){
            obj[`x${item[0]}`][1]++;
        }
        if(obj.hasOwnProperty([`y${item[1]}`])){
            obj[`y${item[1]}`][1]++;
        }else {
           obj[`x${item[0]}`] = [item[0], 1];
           obj[`y${item[1]}`] = [item[1], 1];
        }
      
        // obj[`x${item[0]}`] = [item[0], (obj[`x${item[0]}`][1] || 0) + 1];
        // obj[`y${item[1]}`] = [item[1], (obj[`y${item[1]}`][1] || 0) + 1];
    });

    console.log(obj);  
    // 1번째 예상 obj = {1: 1, 3: 2, 4: 2, 10: 1};
    // 2번째 예상 obj = {x1: [1, 2], x2: [2, 1], y1: [1, 1], y2: [2, 2]};

    // for(let key in obj){
    //    if(obj[key] < 2 ){
    //       answer.push(Number(key));
    //    }
    // }

    for(let key in obj){
        if(obj[key][1] < 2){
            answer.push(obj[key][0]);
        }    
    }
    console.log(answer);

};



// no solution;