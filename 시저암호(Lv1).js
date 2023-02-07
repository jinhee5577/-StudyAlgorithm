function solution(s, n) {
    let answer = '';
    let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    let arr = s.split('');
    
    for(let i = 0; i < arr.length; i++){
        let text = abc.includes(arr[i]) ? abc : ABC;
        let ind = text.indexOf(arr[i]);   // 없으면 -1이 나옴.
        
        if(ind === -1){ answer += ' '; continue; }
        if(ind + n > 25){ answer += text[(ind + n) - 26]; } 
        else { answer += text[ind + n]; } 
    }
     
    return answer;
}