/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;
  let prev = dummyHead, curr = dummyHead.next;
  while (curr !== null) {
    if (curr.val !== val) {
      prev = curr;
      curr = curr.next;
    } else {
      curr = curr.next;
      prev.next = curr;
    }
  }
  return dummyHead.next;
};