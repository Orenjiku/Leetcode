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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let nodeList = [];
    
    inOrder(root, nodeList);
    const sortList = nodeList.map(node => node.val).sort((a, b) => a - b);

    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].val = sortList[i]
    }

    return root;
};

const inOrder = (node, nodeList) => {
    if (!node) return;
    inOrder(node.left, nodeList);
    nodeList.push(node);
    inOrder(node.right, nodeList);
}