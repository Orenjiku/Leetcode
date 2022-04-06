/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head) return head;
    
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let rev = reverseLinkedList(slow);
    while(head != null && rev != null){
        if(head.val !== rev.val){
            return false;
        }
        head = head.next;
        rev = rev.next;
    }
    return true
};

const reverseLinkedList = (head) => {
    if (head === null || head.next === null) return head;
    const tmp = reverseLinkedList(head.next);
    head.next.next = head;
    head.next = null;
    return tmp;
}