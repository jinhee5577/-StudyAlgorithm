// 나의 첫번째 답안.
function solution(s) {
    let answer = s.split(' ').map((st) => { 
        st = st.toLowerCase(); 
        let arr = [st[0], st.slice(1, st.length)]; 
        if(!Number(arr[0])){ arr[0] = arr[0].toUpperCase(); }      

        return arr.join('');                       
    }).join(' ');

    return answer;
}

// 테스트 케이스들은 통과 하였지만, 최종제출에서 런타임에러로 실패함. (왜 시간이 오래걸리는거지?....)



// 나의 2번째풀이
function solution (s){
    let answer = s.split(' ').map((st) => {
        st = st.toLowerCase();
        return st.charAt(0).toUpperCase() + st.substring(1);
    });
    
    return answer.join(' ');
    // charAt(0) 문자열의 0번째를 선택
    // substring(1) 문자열 1번부터 끝까지
}
