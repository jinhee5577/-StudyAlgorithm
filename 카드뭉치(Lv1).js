function solution(cards1, cards2, goal) {
    // 어차피 카드배열에서 맨앞 카드부터 사용할수 있으니 shift() 사용한다.
    // 생각을 반대로 하자 완성된 배열에서 단어들을 하나씩 비교하자.
    for(let word of goal) {
        if(word === cards1[0]){
           cards1.shift(); 
        }else if(word === cards2[0]){
            cards2.shift(); 
        } else {return "No";}
    }
    
    return "Yes";
}