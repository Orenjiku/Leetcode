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
    let maxSum = -Infinity;
	const postOrderTraverse = (node) => {
		if (!node) return 0;
		let left = postOrderTraverse(node.left);
		let right = postOrderTraverse(node.right);
		maxSum = Math.max(maxSum, node.val, node.val + left + right, node.val + left, node.val + right);
		return node.val + Math.max(0, left, right);
	}
	postOrderTraverse(root);
	return maxSum;
};