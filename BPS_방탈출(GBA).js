 // 가비아 코테 방탈출 BFS문제 풀이
        function solution(N, M, D, L) {
            // 이동 좌표 만들기
            const dy = [1,-1,0,0];
            const dx = [0,0,1,-1];
            // 이동가능한 좌표 큐에 넣어줌.
            const albe_que = [];

            // 방문 기록용 보드 만들기.
            // const visited = Array.from({length:N}, () => {
            //     return new Array(M).fill(false);
            // });

            // 최단거리 기록용 보드 만들기.
            const shortDistance = Array.from({length:N}, () => {
                return new Array(M).fill(Infinity);
            });

            // 시작점.
            shortDistance[0][0] = 0;
           // visited[0][0] = true; 
            // 처음 이동가능한 좌표 시작점 넣어줌.
            albe_que.push([0,0]);

            while(albe_que.length){
                // 현재 좌표.
                const [y, x] = albe_que.shift(); 

                for(let i=0; i<4; i++){ // 사방면으로 이동가능한 경우의수.
                    // 다음좌표.
                    const nextY = y + dy[i]; 
                    const nextX = x + dx[i];

                    // 다음좌표가 보드위에 존재하는지.
                    if(nextY>=0 && nextX>=0 && nextY<N && nextX<M){
                      //  const cost = L[nextY][nextX] === 0 ? shortDistance[y][x] : shortDistance[y][x]+D;
                        
                        if(shortDistance[y][x]+D < shortDistance[nextY][nextX]) {
                            shortDistance[nextY][nextX] = shortDistance[y][x]+D;

                            if(L[nextY][nextX] === 0){  // 열린방이고,
                                albe_que.unshift([nextY,nextX]);
                            } else if (L[nextY][nextX] === 1) { // 잠겨있고,
                                albe_que.push([nextY,nextX]);
                            }
                        } 
                    }
                }
            }

            console.log(shortDistance);

            let lastRoom = shortDistance[N-1][M-1]; 

            return lastRoom ? lastRoom : -1;
            
        };

        const N = 3; 
        const M2 =5;
        const D = 3;
        const L = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]];

        const result2 = solution(N, M2, D, L);
        console.log(result2);