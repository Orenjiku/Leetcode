/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
    let map = {};
    G.forEach(num => map[num] = true);
    let output = 0;
    let currConnection = 0;
    while (head !== null) {
        if (map[head.val]) {
            currConnection++;
        } else {
            if (currConnection > 0) output++;
            currConnection = 0;
        }
        head = head.next;
    }
    if (currConnection > 0) output++;
    return output;
};