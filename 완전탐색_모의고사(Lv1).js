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
    // answer.push( if(score[2].sc > 0 ){ score[2].id });
    
    // 진행중
    
    
    return answer;
}