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
var longestZigZag = function(root) {
    let maxCount = 0;
    const traverse = (node) => {
        if (!node) return [0, 0];
        let left = traverse(node.left);
        let right = traverse(node.right);
        let leftCount = node.left ? left[1] + 1 : 0;
        let rightCount = node.right ? right[0] + 1 : 0;
        maxCount = Math.max(maxCount, leftCount, rightCount);
        return [leftCount, rightCount];
    }
    traverse(root);
    return maxCount;
};