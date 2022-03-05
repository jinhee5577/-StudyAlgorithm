
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
        
        if(!this.heap[leftIDX]){ return root; }  // 왼쪽 자식이 없으면 자식이 없으므로 바로 root return한다!
        if(!this.heap[righIDX]){   // 오른쪽이 없으면 왼쪽자식만 있다는뜻
            if(this.heap[leftIDX] < this.heap[currentIDX]){  // 왼쪽 자식보다 부모노드가 더 크다면 swap
                 [this.heap[currentIDX], this.heap[leftIDX]] = [this.heap[leftIDX], this.heap[currentIDX]];    // swap
            }
            return root;
        }

        while(this.heap[leftIDX] < this.heap[currentIDX] || this.heap[righIDX] < this.heap[currentIDX]){  
            // 자식모두 있을경우라면, 부모와 비교를 해야하니 반복검사 시작.
            let minIDX = this.heap[leftIDX] < this.heap[righIDX] ? leftIDX : righIDX;
            [this.heap[currentIDX], this.heap[minIDX]] = [this.heap[minIDX], this.heap[currentIDX]];   // swap

            currentIDX = minIDX;     //  햐향식으로 검사하기위해 자식노드로 기준점 변경.
            leftIDX = currentIDX * 2;  
            righIDX = (currentIDX * 2) + 1;             
        }
        return root;     // root 를 return한다.             
    }


}


let jobs = [[0, 3], [1, 9], [2, 6]];
function solution (jobs){
    let discHeap = new Heap();      
    let newArr = [];
    let sumTime = [];
    discHeap.heapPUSH(jobs);
    //    let result = discHeap.heapPOP();

    for(let i = 0; i < jobs.length; i++){
        newArr.push(discHeap.heapPOP());
    }
    newArr.reduce((pre, curr) => { 
        sumTime.push(pre + curr[1] - curr[0]);  
        return  pre + curr[1];
    }, 0);

    let total = sumTime.reduce((pre, curr) => {
                     return pre + curr;
                }, 0);
    let answer = Math.floor(total / sumTime.length);
    return answer;
}