/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return traverse(root, p, q)[1];  
};

const traverse = (root, p, q) => {
    if (root === null) return [0, null]
    const left = traverse(root.left, p, q);
    const right = traverse(root.right, p, q);

    let count = left[0] + right[0];
    if (root === p || root === q) count++;
    if (count === 2 && left[1] === null && right[1] === null ) return [count, root];
    return [count, left[1] || right[1]]
}