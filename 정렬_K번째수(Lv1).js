function solution(array, commands) {
    let answer = [];
    for(let i = 0; i < commands.length; i++){
       let Eeachcom = commands[i];
       let slice_jh = array.slice(Eeachcom[0] - 1,Eeachcom[1]);
         answer.push(slice_jh.sort((a, b) => a - b)[Eeachcom[2] - 1]);     
    } 
   return answer;
}