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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    let maxDepth = 0;
    let lca = root;
    const dfs = (node, depth) => {
        if (!node) {
            maxDepth = Math.max(depth, maxDepth);
            return depth;
        }
        const left = dfs(node.left, depth + 1);
        const right = dfs(node.right, depth + 1);
        if (left === maxDepth && right === maxDepth) lca = node;
        return Math.max(left, right);
    }
    dfs(root, 0);
    return lca;
};