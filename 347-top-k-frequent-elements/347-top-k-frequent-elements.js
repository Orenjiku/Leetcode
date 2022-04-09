/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const maxHeap = new MaxHeap(nums, k);
    console.log(maxHeap)
    return maxHeap.getKFreq(k);
};

class MaxHeap {
    constructor(array, k) {
        this.k = k;
        this.freqMap = array.reduce((acc, cur) => {
            acc[cur] = (acc[cur] || 0) + 1;
            return acc;
        }, {});
        this.heap = this.build(array);
    }
    
    build(array) {
        const heap = [];
        Object.keys(this.freqMap).forEach(value => {
            this.insert(value, heap);
        });
        return heap;
    }
    
    insert(value, heap) {
        heap.push(value);
        this.siftUp(value, heap.length - 1, heap);
        // if (heap.length > this.k) 
    }

    remove() {
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        const value = this.heap.pop();
        this.siftDown(0, this.heap, this.freqMap);
        return value;
    }
    
    siftUp(value, curIdx, heap) {
        let parentIdx = Math.floor((curIdx - 1) / 2);
        while (curIdx > 0 && this.freqMap[heap[parentIdx]] < this.freqMap[heap[curIdx]]) {
            [heap[curIdx], heap[parentIdx]] = [heap[parentIdx], heap[curIdx]];
            curIdx = parentIdx;
            parentIdx = Math.floor((curIdx - 1) / 2);
        }
    }

    siftDown(curIdx, heap, freqMap) {
        let childOneIdx = 2 * curIdx + 1;
        while (childOneIdx < heap.length) {
            const childTwoIdx = 2 * curIdx + 2;
            const nextIdx = childTwoIdx < heap.length && freqMap[heap[childTwoIdx]] > freqMap[heap[childOneIdx]] ? childTwoIdx : childOneIdx;
            if (freqMap[heap[curIdx]] < freqMap[heap[nextIdx]]) {
                [heap[curIdx], heap[nextIdx]] = [heap[nextIdx], heap[curIdx]];
                curIdx = nextIdx;
                childOneIdx = 2 * curIdx + 1;
            } else {
                break;
            }
        }
    }
    
    getKFreq(k) {
        let array = [];
        for (let i = 0; i < k; i++) {
            array.push(this.remove());
        }
        return array;
    }
}