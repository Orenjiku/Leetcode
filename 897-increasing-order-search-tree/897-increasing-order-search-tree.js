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
var increasingBST = function(root) {
    const arr = []
    traverse(root, arr);
    let cur = new TreeNode(arr[0]);
    const ans = cur;
    for (let i = 1; i < arr.length; i++) {
        const node = new TreeNode(arr[i])
        cur.right = node;
        cur = node;
    }
    return ans;
};

const traverse = (node, arr) => {
    if (node === null) return;
    traverse(node.left, arr);
    arr.push(node.val)
    traverse(node.right, arr);
}