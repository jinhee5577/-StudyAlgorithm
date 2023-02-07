// 내 부동산조회 프로젝트에서 문자열로 오는 거래금액을 억단위를 붙여 return하기.


function 거래금액 (apt){  // apt오브젝트에 해당아파트자료들이 들어있다.  
    // apt.거래금액 : '     25,6700'  이런식으로 담겨 넘어온다.

    let price = apt.거래금액;  // 금액문자열
    let arr = [];       
    for(let i = 0; i <price.length; i++){
        if(price[i] !== ' '){ arr.push(price[i]); }  // 빈칸제거.
    }

    if(arr.length > 5){  // 천만단위 이하는 억이 붙지않는다.
       arr.splice(-5,0, '억');
       if(arr[3] == 0){ arr.splice(3, 1); }  // 천만자리가 0이면 제거함.   
    }                               
    price = arr.join('');

    return `${price}만원`;   // output : 25억,6700만원 으로 return 된다.
};
