/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    const result = [];
	const preOrderTraverse = (node, target, k) => {
		if (!node) return;
		if (k === 0) {
			result.push(node.val);
			return;
		};
		preOrderTraverse(node.left, target, k - 1);
		preOrderTraverse(node.right, target, k - 1);
	};
	
	const postOrderTraverse = (node, target, k) => {
		if (!node) return 0;
		if (node === target) {
			preOrderTraverse(node, target, k);
			return 1;
		}
		let left = postOrderTraverse(node.left, target, k);
		let right = postOrderTraverse(node.right, target, k);
		let dist = left || right;
        if (k - dist === 0 && k !== 0) result.push(node.val)
		if (left > 0) preOrderTraverse(node.right, target, k - 1 - dist);
		if (right > 0) preOrderTraverse(node.left, target, k - 1 - dist);
		return dist > 0 ? dist + 1 : 0;
	};
	postOrderTraverse(root, target, K);
	return result;
};