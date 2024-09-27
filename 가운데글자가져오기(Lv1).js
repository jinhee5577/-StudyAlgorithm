function solution(s) {
    const st_arr = s.split("");
    console.log(st_arr[Math.floor((st_arr.length-1) / 2)]);
    
    return st_arr.length % 2 == 0 
           ? st_arr[Math.floor((st_arr.length-1) / 2)]+st_arr[Math.floor((st_arr.length-1) / 2)+1]
           : st_arr[Math.floor(st_arr.length / 2)];
}