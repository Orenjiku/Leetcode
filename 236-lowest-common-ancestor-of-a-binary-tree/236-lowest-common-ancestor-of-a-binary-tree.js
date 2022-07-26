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

const lowestCommonAncestor = (root, p, q) => {
    return traverse(root, p, q).LCA;
};

const traverse = (root, p, q) => {
    if (root === null) return {count: 0, LCA: null};
    const left = traverse(root.left, p, q);
    const right = traverse(root.right, p, q);
    const count = left.count + right.count + ((root === p || root === q) ? 1 : 0);
    const LCA = count === 2 && !left.LCA && !right.LCA ? root : left.LCA || right.LCA;
    return {count, LCA};
}