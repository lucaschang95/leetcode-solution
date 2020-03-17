 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let dummyHead = new ListNode(-1), outerHead, innerTail, temp = dummyHead, tempId = 0;
  dummyHead.next = head;

  // tempId point to exactly temp ListNode
  while (tempId < m - 1) {
    temp = temp.next;
    tempId++;
  }

  outerHead = temp;
  tempId++;
  temp = temp.next;
  innerHead = temp;
  innerTail = temp;

  tempId++;
  temp = temp.next;
  let next;

  while (tempId <= n) {
    next = temp.next;
    temp.next = outerHead.next;
    outerHead.next = temp;
    temp = next;
    tempId++;
    // next = temp.next;
    // temp.next = innerHead;
    // innerHead = temp;
    // temp = next;
    // tempId++;
  }
  innerTail.next = temp;

  return dummyHead.next;
};

let l1 = new ListNode(1);
let l2 = new ListNode(2);
let l3 = new ListNode(3);
let l4 = new ListNode(4);
let l5 = new ListNode(5);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;

reverseBetween(l1, 2, 4);
