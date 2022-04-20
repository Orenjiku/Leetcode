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
    return traverse(root, p, q).LCA;
};

const traverse = (root, p, q) => {
    if (root === null) return {count: 0, LCA: null}
    const left = traverse(root.left, p, q);
    const right = traverse(root.right, p, q);

    let count = left.count + right.count;
    if (root === p || root === q) count++;
    if (count === 2 && left.LCA === null && right.LCA === null ) return {count, LCA: root};
    return {count, LCA: left.LCA || right.LCA}
}