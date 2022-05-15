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
var deepestLeavesSum = function(root) {
    let deepestSum = 0;
    const queue = [root];
    while (queue.length > 0) {
        const len = queue.length;
        let curSum = 0;
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            curSum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        deepestSum = curSum;
    }
    return deepestSum;
};