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
		let left = postOrderTraverse(node.left);
		let right = postOrderTraverse(node.right);
        let maxLeft = Math.max(0, left[0]);
        let maxRight = Math.max(0, right[0]);
		maxSum = Math.max(Math.max(left[1], right[1]), node.val + maxLeft + maxRight);
		return [node.val + Math.max(maxLeft, maxRight), maxSum];
	}
	return postOrderTraverse(root)[1];
};