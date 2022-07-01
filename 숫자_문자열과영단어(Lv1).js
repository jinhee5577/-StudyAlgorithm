// 1번째 솔루션

function solution1(s){
    let nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = 0;
  
    for(let i = 0; i < nums.length; i++) {
        let arr = s.split(nums[i]);               
        s = arr.join(i);
    }

    answer = Number(s);
    return answer;    
}


// 2번째 솔루션

function solution2(s) {
    var answer = s;
    let num = ['zero','one','two','three','four','five','six','seven','eight','	nine'];
    
    for(let i = 0; i < num.length; i++) {
       let arr = answer.split(num[i]);               
       answer = arr.join(i);
    }
    
    return Number(answer);
}