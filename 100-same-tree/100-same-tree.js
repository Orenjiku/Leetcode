/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return traverse(p, q);
};

const traverse = (p, q) => {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    const left = traverse(p.left, q.left);
    const right = traverse(p.right, q.right);
    return p.val === q.val && left && right;
}