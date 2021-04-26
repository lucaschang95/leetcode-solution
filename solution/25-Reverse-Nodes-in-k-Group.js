
function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (k = 1) {
        return head;
    }
    const dummyHead = new ListNode(0, head);
    let curr = dummyHead;
    while (curr !== null && curr.next !== null) {
        curr = reverseNextKLists(curr, k);
    }
    return dummyHead.next;
};

let reverseNextKLists = function(dummyHead, k) {
    if (!hasKLists(dummyHead, k)) return null;

    let prev = dummyHead.next, head = dummyHead.next, curr = prev.next, next = curr.next;

    for (let i = k-1; i > 1; i--) {
        curr.next = prev;
        prev = curr;
        curr = next;
        next = curr.next;
    }

    curr.next = prev;
    dummyHead.next = curr;
    head.next = next;
    return head;
};

// 查看后面是否还有k个node
let hasKLists = function(dummyHead, k) {
    let curr = dummyHead;
    for (let i = k; i > 0; i--) {
        curr = curr.next;
        if (!curr) {
            break;
        }
    }
    return curr !== null
};

let n5 = new ListNode(5, null);
let n4 = new ListNode(4, n5);
let n3 = new ListNode(3, n4);
let n2 = new ListNode(2, n3);
let n1 = new ListNode(1, n2);

console.log(reverseKGroup(n1, 2));