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
