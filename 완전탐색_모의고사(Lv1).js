function solution(answers) {
    var answer = [];
    let supoza = [
            [1, 2, 3, 4, 5],
            [2, 1, 2, 3, 2, 4, 2, 5],
            [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
        ];
    let score = [{id: 1, sc : 0} , {id: 2, sc : 0}, {id: 3, sc : 0}];  
    // 어차피 삼인방이니 여기다 본인들 스코어 판을 만들자.
    
    for(let s = 0; s < 3; s++ ){
        answers.forEach((a, i) => {
             if(a === supoza[s][i % supoza[s].length]){
                 score[s].sc++;
             }         
        })
    }
    
    score.sort((a, b) => { return a.sc - b.sc; });
    let max_sc = score[2].sc;
    if(max_sc > 0){  // 같은 점수가 2개 이상일수도 있으니.
       let filter = score.filter((item) => {return item.sc === max_sc; });
       let new_map = filter.map((item) => { return item.id; });
           answer = answer.concat(new_map);        
    }
  
    return answer;
}


