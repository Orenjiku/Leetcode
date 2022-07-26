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
    if (root === null) return {isFound: false, LCA: null};
    const left = traverse(root.left, p, q);
    const right = traverse(root.right, p, q);
    const rootMatch = root === p || root === q;
    const rootIsLCA = left.isFound && right.isFound && left.LCA === null && right.LCA === null;
    const rootIsDescendantItself = rootMatch && (left.isFound || right.isFound);
    if (rootIsLCA || rootIsDescendantItself) return {isFound: true, LCA: root};
    return {isFound: left.isFound || right.isFound || rootMatch, LCA: left.LCA || right.LCA}
}