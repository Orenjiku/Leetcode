/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */


var flatten = function(root) {
    if (!root) return;
    const tempLeft = root.left;
    const tempRight = root.right;
    
    root.left = null;
    
    flatten(tempLeft);
    flatten(tempRight);
    
    root.right = tempLeft;
    let cur = root;
    while (cur.right !== null) cur = cur.right;
    cur.right = tempRight;
};