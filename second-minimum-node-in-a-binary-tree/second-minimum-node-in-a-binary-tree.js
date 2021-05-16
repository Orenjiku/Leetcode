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
var findSecondMinimumValue = function(root) {
    const nums = [];
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        nums.push(node.val);
        traverse(node.right);
    }
    traverse(root);
    nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > root.val) return nums[i];
    }
    return -1;
};