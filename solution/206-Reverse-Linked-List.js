
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList_recursive = function (head) {
  // Recursively
  // 1. head part + others part
  // 2. reverse others part
  // 3. add head to the tail
  if (!head || !head.next) return head;
  let reversedTail = head.next;
  head.next = null;
  let reversedHead = reverseList(reversedTail);
  reversedTail.next = head;
  return reversedHead;
};

var reverseList_iterative = function (head) {
  // Itratively

  if (!head) return head;
  let prev = null, temp = head, next;

  while (temp) {
    next = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next;
  }

  return prev;
};


// let l1 = new ListNode(1);
// let l2 = new ListNode(2);
// let l3 = new ListNode(3);
// let l4 = new ListNode(4);
// let l5 = new ListNode(5);
// l1.next = l2; l2.next = l3; l3.next = l4; l4.next = l5;
// console.log(l1);
// reverseList(l1);
// console.log(l5);
// console.log('aaa');