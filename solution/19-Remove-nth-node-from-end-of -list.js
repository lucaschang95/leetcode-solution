/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummyHead = new ListNode(-1, head);
    let fNode = head, bNode = dummyHead;
    // 此时默认n小于数组的长度
    for (let i = 0; i < n; i++) {
        fNode = fNode.next;
    }

    while (fNode !== null) {
        fNode = fNode.next;
        bNode = bNode.next;
    }

    bNode.next = bNode.next.next;

    return dummyHead.next;
};