/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const maxHeap = new MaxHeap(nums, k);
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
            this.insert(value, heap, this.freqMap);
        });
        return heap;
    }
    
    insert(value, heap, freqMap) {
        heap.push(value);
        this.siftUp(value, heap.length - 1, heap);
        if (heap.length > this.k) {
            this.removeMinFreqChild(heap, freqMap);
        }
    }
    
    removeMinFreqChild(heap, freqMap) {
        let minFreq = Infinity;
        let minIdx;
        for (let i = 0; i < heap.length; i++) {
            if (freqMap[heap[i]] < minFreq) {
                minFreq = freqMap[heap[i]];
                minIdx = i;
            }
        }
        this.remove(minIdx, heap, freqMap);
    }

    remove(idx, heap, freqMap) {
        [heap[idx], heap[heap.length - 1]] = [heap[heap.length - 1], heap[idx]];
        const value = heap.pop();
        this.siftDown(idx, heap, freqMap);
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
            array.push(this.remove(0, this.heap, this.freqMap));
        }
        return array;
    }
}