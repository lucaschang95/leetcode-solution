/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0, dummyHead = new ListNode(-1), curr = dummyHead;
    while (l1 || l2 || carry) {
        // Calculate
        let temp = (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val) + carry;
        if (temp > 9) {
            temp -= 10;
            carry = 1;
        } else carry = 0;
        // Construct ListNode
        curr.next = new ListNode(temp);
        curr = curr.next;
        // Update state
        l1 = l1 === null ? l1 : l1.next;
        l2 = l2 === null ? l2 : l2.next;
    }
    return dummyHead.next;
};