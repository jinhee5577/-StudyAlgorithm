// 웹젠 코테문제중 1개나의 답안.

function changeMoney (inputMoney){
    let output = [];
    let coinType = [500, 100, 50, 10, 1];
    let Done = inputMoney;

    coinType.forEach((m) => { 
        output.push(Math.floor(Done / m));
        Done = Done % m;
    });

    return output;
}