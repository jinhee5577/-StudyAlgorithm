// 1번째 나의 풀이
function solution (record){
    let answer = []; 
    let openchat = [];
    
    record.forEach((item, i) => {
        openchat.push(item.split(" "));    // 문자열 공백기준으로 쪼개서 배열로 만든후 openchat배열에 넣어준다.           
    });

    openchat.forEach((item, i) => {
       if(item[0] ==='Enter'){
         if(i > 1){
            for(let j = 0; j < i; j++){
                if(openchat[j][1] === item[1]){
                     if(answer[j].ac === 'Enter'){answer[j].comment = `${item[2]}님이 들어왔습니다.`;}
                     if(answer[j].ac === 'Leave'){answer[j].comment = `${item[2]}님이 나갔습니다.`;}    
                }
            }
            answer.push({id : item[1], ac : item[0], comment : `${item[2]}님이 들어왔습니다.`});
         } else { answer.push({id : item[1], ac : item[0], comment : `${item[2]}님이 들어왔습니다.`}); }                     
       } 
       if(item[0] === 'Leave'){
         if(i > 1){
            for(let j = 0; j < i; j++){    
             if(openchat[j][1] === item[1]){
                answer.push({id : item[1], ac : item[0], comment : `${openchat[j][2]}님이 나갔습니다.`});
              }
            }                  
         } else { answer.push({id : item[1], ac : item[0], comment : `${openchat[0][2]}님이 나갔습니다.`}); }     
       }
       if(item[0] === 'Change'){
          for(let j = 0; j < i; j++){
             if(openchat[j][1] === item[1]){
                answer[j].ac = item[0]; 
                answer[j].comment = `${item[2]}님이 들어왔습니다.`;
              }
          }   
       }                    
        
    });

    return answer.map((user) => { return user.comment; });    
}


// 테스트 케이스만 통과 되었고, 런타임에러로 실패.
// 다시 코드수정해서 적용해보자!.


//  잦은 데이터 갱신과 적은 데이터 출력에는 Object > Map
//  적은 데이터 갱신과 많은 데이터 출력에는 Object<<<<<<<<<< Map 라고 한다.


// 2번째 나의 풀이 
function solution (record){
   let answer = [];
   const userID = new Map();

   record.forEach((item) => {
       let [command, id, nick] = item.split(' ');
       if (command === 'Enter' || command === 'Change') userID.set(id, nick);
   })

   record.forEach((item) => {
       let [command, id] = item.split(' ');
       if (command === 'Enter') answer.push(`${userID.get(id)}님이 들어왔습니다.`);
       if (command === 'Leave') answer.push(`${userID.get(id)}님이 나갔습니다.`);
   })

   return answer;
}
