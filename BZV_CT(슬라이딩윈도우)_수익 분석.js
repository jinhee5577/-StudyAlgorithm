// Profit Analysis (수익 분석)

/* 문제 설명:
한 데이터 분석가가 HackShare 주식에 대한 자신의 투자 수익률(PnL: Profit and Loss)을 분석하고자 합니다.
PnL은 배열 pnl[i]로 주어지며, 이는 i번째 달에 얻은 수익입니다.

수익은 양수일 수도 있고, **손실(음수)**일 수도 있습니다.

당신의 임무:
pnl 배열이 주어졌을 때,

길이가 최대 k 이하인 연속 부분 배열 중,

총합(수익)이 가장 큰 부분 배열의 합을 구하시오.


예시:
plaintext
복사
편집
n = 6  
pnl = [-3, 4, 3, -2, 2, 5]  -> 정수형 배열 (각 달의 손익)
k = 4  -> 최대 부분 배열 길이

[3, -2, 2, 5] → 길이 4 (조건 만족), 합은 3 + (-2) + 2 + 5 = 8
[4, 3, -2, 2, 5] → 합은 더 큼 (12), 그러나 길이 5 → 조건 위반 ❌

정답은 : 8


제약 조건 (Constraints)
1 ≤ n ≤ 2 * 10^5
-10^9 ≤ pnl[i] ≤ 10^9
1 ≤ k ≤ n */


// 단순한 최대 부분 배열 합 문제 (Kadane's Algorithm)이 아니라,
// 이가 k를 넘지 않아야 하기 때문에 슬라이딩 윈도우 기법이 필요하다.
// 따라서 슬라이딩 윈도우 기법으로 풀이함.

function solution(pnl, k) {
    const n = pnl.length;
    let maxSum = -Infinity; // 제약조건에서 -10^9값도 있으니, 비교 초기값 최대로 작음 -음수로 지정.
    let nowSum = 0;
    // 슬라이딩 윈도우니 두개의 포인트가 필요함.
    let left = 0;

    // rigth 포인트는 for안에서 자동으로 돌게 잡아줌.
    for(let rigth = 0; rigth < pnl.length; rigth++){
        nowSum += pnl[rigth];

        if(rigth - left +1 > k){ // 길이가 k를 넘을 경우 왼쪽에서 하나씩 빼준다.
           nowSum -= pnl[left];
           left++;
        }
        
        // for문 돌때마다 이전 최대값과 현재 합산을 비교한다.
        maxSum = Math.max(maxSum, nowSum);
    }

    return maxSum;
};

// 출력: 8

/* 
 시간복잡도
 O(n) — 한 번씩만 순회 
*/