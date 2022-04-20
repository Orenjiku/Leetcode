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
    let result;
    const dfs = (root, k) => {
        if (root === null) return;
        dfs(root.left, k);
        count++;
        if (count === k) result = root.val;
        dfs(root.right, k)
    }
    dfs(root, k);
    return result;
};