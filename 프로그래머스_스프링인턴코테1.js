// 2023년 프로그래머스 스프링인턴 코테1문제 나의풀이. (복권 당첨.)

 function solution() {
    // 1) lotteries = [[100,100,500], [1000,1000,100]]
    // 2) lotteries = [[10,19,600], [20,39,200], [100,199,500]]
    // 1) lotteries = [[50,1,50], [100,199,100], [1,1,500]]
    let lotteries = [[10,19,600], [20,39,200], [100,199,500]];
    let answer = 0;
    let arr = [];

    lotteries.forEach((lot, i) => {
        let obj = {};
        if(lot[0] === (lot[1] + 1) || lot[0] > lot[1] + 1){ obj.able = 100; } // 확률
        else{ obj.able = (lot[0] / (lot[1] + 1)) * 100; }  // 확률
        obj.mony = lot[2];
        obj.num = i + 1;
        arr.push(obj);
    });
    
    arr.sort((a, b) => { return b.able - a.able });

    if(arr[0].able > arr[1].able){ return answer = arr[0].num; }
    if(arr[0].able == arr[1].able ){     
        let first = arr.shift();
        let sameAlbe = [first];

        for(let i = 0; i < arr.length; i++){
            if(first.able === arr[i].able){ // 확률이 같다면
                sameAlbe.push(arr[i]); 
            } else { break; }
        }      
        
        sameAlbe.sort((a, b) => {return b.mony - a.mony; });
        console.log(sameAlbe);
        answer = sameAlbe[0].num;
    }

    return answer;
}    