const v = [[1,4], [3,4], [3,10]];
const v2 = [[1,1], [2,2], [1,2]];
// 직사각형을 만드는 나머지 좌표 한개 구해서 리턴 하세요.
// 좌표는 모두 1이상 자연수 (x, y)

function solution(v) {
    let answer = [];
    let obj = {};

    v.forEach((ele) => {
       obj[`x${ele[0]}`] = obj[`x${ele[0]}`] ? obj[`x${ele[0]}`]+1 : 1; 
       obj[`y${ele[1]}`] = obj[`y${ele[1]}`] ? obj[`y${ele[1]}`]+1 : 1; 
    });

    const newarry = Object.entries(obj);
    console.log(newarry);
    newarry.forEach((item) => {
       if(item[1] == 1){answer.push(item[0]);} 
    });

    if(!answer[0].includes('x')){
       [answer[0], answer[1]] = [answer[1], answer[0]]; 
    }
    console.log(answer);
    const numArr = answer.map((a) => {
      return Number(a.slice(1, a.length));
    });
    console.log(numArr);
    
    return numArr;
};
