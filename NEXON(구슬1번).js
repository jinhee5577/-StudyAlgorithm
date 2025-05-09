// 나의 풀이

 //  const N = parseInt(input[0]);
    //  const M = input[1];
    const M = '111*213*22*3*132**12';
    //  const Q = parseInt(input[2]);
    //  const queries = input.slice(3).map(line => line.split(' ').map(Number));
    const queries = [[3,8],[10,18],[0,11],[4,9]];

    for (let [s, e] of queries) {
        const segment = M.slice(s, e + 1);
        console.log(segment);
        const result = matchWithStars(segment);
        console.log(result);
    }
    // 출력 답: 6, 9, 10, 0


    function matchWithStars(segment) {
        const arr = segment.split('');
        const stack = [];
        let cntAS = 0;
        let numSum = 0;
    //  const removed = Array(arr.length).fill(false);

        for (let i=0; i < arr.length; i++) {
            stack.push(arr[i]);

            if(arr[i] === '*') { cntAS++; }
            if (stack.length >= 3 && cntAS == 2) {
                let idx = stack.indexOf('*');
                const findIdxArr = [];
            
                while (idx != -1) {
                    findIdxArr.push(idx);
                    idx = stack.indexOf('*', idx+1);
                }

                if(['1','2','3'].includes(stack[findIdxArr[0]+1])){ // '*'다음이 숫자인지 확인함.
                    for(let i=0; i < (findIdxArr[1]-findIdxArr[0]); i++) { // '*'두개 거리 갯수만큼 stack에서 pop함.
                        const out = stack.pop();
                        
                        if(out !== '*') { // 숫자면
                            numSum += Number(out);
                        }
                    }
                } else {
                   // '**' 일때  
                   stack.pop();
                }

                // '*' 1개를 pop 했으므로.
                cntAS = 1;
            }
        }

    // console.log(numSum);
        
        return numSum;
}
