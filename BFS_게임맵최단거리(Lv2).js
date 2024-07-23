function solution(maps) {
    // 큐를 이용해 BFS를 풀이한다.
    // 시계방향으로 상,우,하,좌 x,y좌표 이동칸수
    const dx = [-1,0,1,0];
    const dy = [0,1,0,-1];
    
    // 이동가능한 좌표저장 큐.
    let able_que = [];
    able_que.push([0,0]); //맨처음 초기위치 큐에 넣음.
    
    // 방문했는지 기록용보드 기존보드 크기만큼 따로 2차원배열 만들기
    const visited = Array.from({length:maps.length},() => {
        return new Array(maps[0].length).fill(false);
        // [[false,false,false,false,false],[false,false,false,false,false],........]
    });
    
    // 최단거리 방문횟수 기록용보드 기존보드 크기만큼 따로 2차원배열 만들기
    const short_distance = Array.from({length:maps.length},() => {
        return new Array(maps[0].length).fill(0);
        //[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],......]
    });
    visited[0][0] = true;
    short_distance[0][0] = 1;
    
    while(able_que.length){
       // 이동가능한 좌표큐에서 맨앞에 좌표 하나 빼온걸 현재위치로 지정한다.
       const [currX, currY] = able_que.shift();
        
       for(let i=0; i<4; i++){
          const postX = currX + dx[i]; // 다음 가능한 상,우,하,좌 좌표
          const postY = currY + dy[i]; // 다음 가능한 상,우,하,좌 좌표
          
          // 좌표가 보드위에 있어야함.
          if(postX>-1 && postX<maps.length && postY>-1 && postY<maps[0].length){
             if(maps[postX][postY] == 1 && !visited[postX][postY]){
                // 갈수 있는 길이고 방문기록이 없는 좌표만 다음 이동 가능한 좌표로 큐에 넣어줌.
                if(short_distance[postX][postY] == 0){ // 최단거리 방문횟수 누적이 안된 좌표만 이동시키고 방문횟수 +1해줌. 
                   able_que.push([postX, postY]);
                   visited[postX][postY] = true; // 이좌표 나 방문 했다 표시해줌.
                   short_distance[postX][postY] = short_distance[currX][currY] + 1;
                }
             }              
          } 
       }         
    }        
    
    return short_distance[maps.length-1][maps[0].length-1] ? short_distance[maps.length-1][maps[0].length-1] : -1 ;
}