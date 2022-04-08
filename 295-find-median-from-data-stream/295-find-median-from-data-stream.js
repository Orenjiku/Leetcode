
var MedianFinder = function() {
    this.maxHeap = new MaxHeap();
    this.minHeap = new MinHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    num > this.minHeap.peek() ? this.minHeap.insert(num) : this.maxHeap.insert(num);
    if (this.maxHeap.length() > this.minHeap.length() + 1) {
        const maxHeapVal = this.maxHeap.remove();
        this.minHeap.insert(maxHeapVal);
    } else if (this.minHeap.length() > this.maxHeap.length() + 1) {
        const minHeapVal = this.minHeap.remove();
        this.maxHeap.insert(minHeapVal);   
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const len = this.maxHeap.length() + this.minHeap.length();
    if (len % 2 === 0) {
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2
    } else {
        return this.maxHeap.length() > this.minHeap.length() ? this.maxHeap.peek() : this.minHeap.peek();
    } 
};

class Heap {
    constructor() {
        this.heap = [];
    }
    
    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1, this.heap);
    }
    
    remove() {
        const lastIdx = this.heap.length - 1;
        [this.heap[0], this.heap[lastIdx]] = [this.heap[lastIdx], this.heap[0]];
        const value = this.heap.pop();
        this.siftDown(0, this.heap);
        return value;
    }
    
    peek() {
        return this.heap[0];
    }
    
    length() {
        return this.heap.length;
    }
}

class MaxHeap extends Heap {
    siftUp(curIdx, heap) {
        let parentIdx = Math.floor((curIdx - 1) / 2);
        while (heap[curIdx] > heap[parentIdx] && curIdx > 0) {
            [heap[curIdx], heap[parentIdx]] = [heap[parentIdx], heap[curIdx]];
            curIdx = parentIdx;
            parentIdx = Math.floor((curIdx - 1) / 2);
        }
    }
    
    siftDown(curIdx, heap) {
        let childOneIdx = 2 * curIdx + 1;
        while (childOneIdx < heap.length) {
            const childTwoIdx = 2 * curIdx + 2;
            const nextIdx = childTwoIdx < heap.length && heap[childTwoIdx] > heap[childOneIdx] ? childTwoIdx : childOneIdx;
            if (heap[nextIdx] > heap[curIdx]) {
                [heap[nextIdx], heap[curIdx]] = [heap[curIdx], heap[nextIdx]];
                curIdx = nextIdx;
                childOneIdx = 2 * curIdx + 1;
            } else {
                break;
            }
        }
    }
}

class MinHeap extends Heap {
    siftUp(curIdx, heap) {
        let parentIdx = Math.floor((curIdx - 1) / 2);
        while (heap[curIdx] < heap[parentIdx] && curIdx > 0) {
            [heap[curIdx], heap[parentIdx]] = [heap[parentIdx], heap[curIdx]];
            curIdx = parentIdx;
            parentIdx = Math.floor((curIdx - 1) / 2);
        }
    }
    
    siftDown(curIdx, heap) {
        let childOneIdx = 2 * curIdx + 1;
        while (childOneIdx < heap.length) {
            const childTwoIdx = 2 * curIdx + 2;
            const nextIdx = childTwoIdx < heap.length && heap[childTwoIdx] < heap[childOneIdx] ? childTwoIdx : childOneIdx;
            if (heap[nextIdx] < heap[curIdx]) {
                [heap[nextIdx], heap[curIdx]] = [heap[curIdx], heap[nextIdx]];
                curIdx = nextIdx;
                childOneIdx = 2 * curIdx + 1;
            } else {
                break;
            }
        }
    }
}
/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */