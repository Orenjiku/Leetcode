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
    let result = root.val;
    const preOrderTraversal = (node) => {
        if (node.left) preOrderTraversal(node.left);
        k -= 1;
        if (k === 0) result = node.val;
        if (node.right) preOrderTraversal(node.right);
    }
    preOrderTraversal(root);
    return result;
};