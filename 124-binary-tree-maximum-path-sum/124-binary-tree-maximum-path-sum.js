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
var maxPathSum = function(root) {
	const postOrderTraverse = (node) => {
		if (!node) return [0, -Infinity];
		const left = postOrderTraverse(node.left);
		const right = postOrderTraverse(node.right);
        const maxLeft = Math.max(0, left[0]);
        const maxRight = Math.max(0, right[0]);
        const prevMaxSum = Math.max(left[1], right[1]); 
		const maxSum = Math.max(prevMaxSum, node.val + maxLeft + maxRight);
		return [node.val + Math.max(maxLeft, maxRight), maxSum];
	}
	return postOrderTraverse(root)[1];
};