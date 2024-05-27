function solution(nums) {
    let answer = 0;
    let obj = {}; // 종류 기록용 obj
    
    nums.forEach((ele) => {
        obj[ele] = obj[ele] ? obj[ele] +1 : 1;
    })
        
   let keyArr = Object.keys(obj);
   console.log(keyArr);
   if(keyArr.length <= (nums.length)/2){ return keyArr.length; }  
   else { return nums.length/2; } 
   
}