/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0;
    let nodeVal = 0;
    const traverse = (node, k) => {
        if (node === null) return;
        const left = traverse(node.left, k);
        count++;
        if (count === k) nodeVal = node.val;
        const right = traverse(node.right, k);
    }
    traverse(root, k)
    return nodeVal;
};