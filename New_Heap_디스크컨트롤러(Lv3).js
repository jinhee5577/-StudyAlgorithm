class Heap{  //  Heap 구현.  (최소힙)
    constructor(){
        this.heap = [null];
    }

    size() {
        return this.heap.length - 1;
    }

    getMin() {
        return this.heap[1] ? this.heap[1] : null;
    }

    heapPUSH(node){  // 삽입
        this.heap.push(node);
        let currentIDX = this.heap.length - 1;   //마지막노드, 자식노드, 현재노드
        let parIDX = Math.floor(currentIDX / 2);  //기준점의 부모노드

        while(currentIDX > 1 && this.heap[parIDX][1] > this.heap[currentIDX][1]){
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

        if(!this.heap[leftIDX]){ return root; }  // 왼쪽 자식이 없으면 자식이 없으므로 바로 root return한다!
        if(!this.heap[righIDX]){   // 오른쪽이 없으면 왼쪽자식만 있다는뜻
            if(this.heap[leftIDX][1] < this.heap[currentIDX][1]){  // 왼쪽 자식보다 부모노드가 더 크다면 swap
                [this.heap[currentIDX], this.heap[leftIDX]] = [this.heap[leftIDX], this.heap[currentIDX]];    // swap
            }
            return root;
        }

        while(this.heap[leftIDX][1] < this.heap[currentIDX][1] || this.heap[righIDX][1] < this.heap[currentIDX][1]){  
            // 자식모두 있을경우라면, 부모와 비교를 해야하니 반복검사 시작.
            let minIDX = this.heap[leftIDX][1] < this.heap[righIDX][1] ? leftIDX : righIDX;
            [this.heap[currentIDX], this.heap[minIDX]] = [this.heap[minIDX], this.heap[currentIDX]];   // swap

            currentIDX = minIDX;     //  햐향식으로 검사하기위해 자식노드로 기준점 변경.
            leftIDX = currentIDX * 2;  
            righIDX = (currentIDX * 2) + 1;  

            if(leftIdx >= this.size()) break;
        }
        return root;     // root 를 return한다.             
    }

}


 function solution(jobs){   
    jobs.sort((a, b) => { return a[0] - b[0]; });

    let length = jobs.length;
    let discHeap = new Heap(); 
    let time = 0;   // 현재시간.
    let done = 0;   // 완료시간.
    let total = 0;  // 디스크 진짜 소요시간 합계.

    while(jobs.length || discHeap.size()){
        while(jobs.length){
            if(time === jobs[0][0] ){  // 현재 시간과 요청시간이 일치한 디스크들만 입장.
                discHeap.heapPUSH(jobs.shift());
            } else  break;    
        }

        if(time >= done && discHeap.size()){   // 디스크 기계는 한번에 하나씩만 처리함.
            let rootDisc = discHeap.heapPOP();
            done = time + rootDisc[1];
            total += done - rootDisc[0];
        }

      time++;
    }

    let answer = (total / length) >> 0;    
    return answer;                            
 }                


// Heap_디스크컨트롤러.JS  완성.