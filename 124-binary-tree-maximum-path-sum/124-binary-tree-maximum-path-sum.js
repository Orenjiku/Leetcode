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
		return [node.val + Math.max(maxLeft, maxRight), Math.max( Math.max(left[1], right[1]), node.val + maxLeft + maxRight)];
	}
	return postOrderTraverse(root)[1];
};