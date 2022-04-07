/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const maxHeap = new MaxHeap(stones);
    while (maxHeap.length() > 1) {
        const maxValue1 = maxHeap.remove();
        const maxValue2 = maxHeap.remove();
        if (maxValue1 - maxValue2 > 0) {
            maxHeap.insert(maxValue1 - maxValue2);    
        }
    }
    return maxHeap.peek() === undefined ? 0 : maxHeap.peek();
};

class MaxHeap {
    constructor(array) {
        this.heap = this.build(array);
    }
    
    build(array) {
        let lastParentIdx = Math.floor((array.length - 2) / 2);
        for (let i = lastParentIdx; i >= 0; i--) {
            this.siftDown(i, array);
        }
        return array;
    }
    
    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1, this.heap);
    }
    
    remove() {
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]]
        const maxValue = this.heap.pop();
        this.siftDown(0, this.heap);
        return maxValue;
    }
    
    siftUp(curIdx, heap) {
        let parentIdx = Math.floor((curIdx - 1) / 2);
        while (heap[curIdx] > heap[parentIdx] && curIdx >= 0) {
            [heap[curIdx], heap[parentIdx]] = [heap[parentIdx], heap[curIdx]];
            curIdx = parentIdx;
            parentIdx = Math.floor((curIdx - 1) / 2);
        }
    }
    
    siftDown(curIdx, heap) {
        let childOneIdx = 2 * curIdx + 1;
        while (childOneIdx < heap.length) {
            const childTwoIdx = childOneIdx + 1 < heap.length ? childOneIdx + 1 : -1;
            const nextIdx = childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx] ? childTwoIdx : childOneIdx;
            if (heap[curIdx] < heap[nextIdx]) {
                [heap[curIdx], heap[nextIdx]] = [heap[nextIdx], heap[curIdx]];
                curIdx = nextIdx;
                childOneIdx = 2 * curIdx + 1;
            } else {
                break;
            }
        }
    }
    
    length() {
        return this.heap.length;
    }
    
    peek() {
        return this.heap[0];
    }
}