function solution(operations) {
    let que = [];
    let newOper = operations.map((item) => { 
        let arr = item.split(' ');
        arr[1] = Number(arr[1]);
        return arr;    
    });
    
    for(let i = 0; i < newOper.length; i++){
        if(newOper[i][0] === 'I'){ que.push(newOper[i][1]); }
        if(newOper[i][0] === 'D'){
            if(que.length){
               let ind = 0; 
               if(newOper[i][1] === 1){ ind = que.indexOf(Math.max(...que)); }
               if(newOper[i][1] === -1){ ind = que.indexOf(Math.min(...que)); } 
               que.splice(ind, 1); 
            } else { continue; }   // 큐가 비었을 경우 다음으로 넘어간다.
        }
    }

    return que.length ? [Math.max(...que), Math.min(...que)] : [0,0];
}