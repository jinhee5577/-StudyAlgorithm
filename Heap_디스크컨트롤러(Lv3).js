function solution(){
    let jobs = [[0, 3], [1, 9], [2, 6]];
    let jobTime = [];
    jobs.forEach((item) => {
        jobTime.push(item[1]);
    });

 //  console.log(jobTime);

}

class Heap{  //  Heap 구현.  (최소힙)
    constructor(){
        this.heap = [null];
    }

    heapPUSH(node){  // 삽입
        this.heap.push(node);
        let currentIDX = this.heap.length - 1;   //마지막노드, 자식노드, 현재노드
        let parIDX = Math.floor(currentIDX / 2);  //기준점의 부모노드

        while(currentIDX > 1 && this.heap[parIDX] > this.heap[currentIDX]){
              [this.heap[parIDX], this.heap[currentIDX]] = [this.heap[currentIDX], this.heap[parIDX]];  // swap
              currentIDX = parIDX;   // 부모노드로 거슬러 올라가기위해 기준점 변경.
              parIDX = Math.floor(currentIDX / 2);    // 다시 부모노드 구하고
        }
    }

    heapPOP(){  // 삭제
        let root = this.heap[1];    
        if(this.heap.length <= 2){ this.heap = [null]; }
        else { this.heap[1] = this.heap.pop(); }    //  root노드가 제거되면 그자리에 가장 마지막 자식노드(마지막인덱스값)를 넣어준다.

        let currentIDX = 1;  // 1 root노드 (기준점) 부터 시작해서 하향식으로 자식노드들 검사해 나간다.
        let leftIDX = currentIDX * 2;           // 왼쪽 자식노드
        let righIDX = (currentIDX * 2) + 1;    // 오른쪽 자식노드 
        
            //계속 풀이 진행중
    }


}