/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head === null) return null;
  
  let prev = head, curr = head.next;

  while (curr !== null) {
    if (prev.val !== curr.val) {
      prev = curr;
      curr = prev.next;
    } else {
      curr = curr.next;
      prev.next = curr;
    }
  }

  return head;
};