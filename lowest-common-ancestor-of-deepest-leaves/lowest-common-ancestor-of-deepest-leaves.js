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
    if (!root.left && !root.right) return root;
    let maxDepth = 0;
    let lca = [];
    const dfs = (node, depth) => {
        if (!node.left && !node.right) {
            if (depth > maxDepth) {
                lca = node;
                maxDepth = depth;
            }
            return depth;
        }
        const left = node.left ? dfs(node.left, depth + 1) : 0;
        const right = node.right ? dfs(node.right, depth + 1) : 0;
        if (left === maxDepth && right === maxDepth) lca = node;
        return Math.max(left, right);
    }
    dfs(root, 0);
    return lca;
};