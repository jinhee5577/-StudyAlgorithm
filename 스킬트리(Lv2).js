function solution(skill, skill_trees) {
    let answer = skill_trees.length;
    // 있는걸 걸러내는 것보다 해당 안되는걸 걸러 내는게 훨씬 빠르다.

    skill_trees.forEach((ele,i)=>{
       const skill_stack = [...skill];
       let arr2 = ele.split('');
       
       // 스킬이 순서 대로 나와야 하므로
       for(let i= 0; i<arr2.length; i++){
           if(!skill.includes(arr2[i])){ continue }
           if(skill_stack.shift() !== arr2[i]){ 
               answer-- 
               break; // 스킬이 순서대로 나오지 않으면 더볼필요도 없이 끝내고 다음원소로 넘어간다.   
           }
       }
    });
    return answer;
}
