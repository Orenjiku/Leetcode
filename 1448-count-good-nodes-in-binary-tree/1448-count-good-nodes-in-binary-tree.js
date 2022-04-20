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
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0;
    const traverse = (root, max = -Infinity) => {
        if (root === null) return;
        if (root.val >= max) count++;
        traverse(root.left, Math.max(max, root.val));
        traverse(root.right, Math.max(max, root.val));
    }
    traverse(root);
    return count;
};