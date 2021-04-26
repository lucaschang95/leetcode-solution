
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// [[1,4,5],[1,3,4],[2,6]]

const n02 = new ListNode(5, null);
const n01 = new ListNode(4, n02);
const n00 = new ListNode(1, n01);
const n12 = new ListNode(4, null);
const n11 = new ListNode(3, n12);
const n10 = new ListNode(1, n11);
const n21 = new ListNode(6, null);
const n20 = new ListNode(2, n21);


/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const dummyHead = new ListNode(0);
    let current = dummyHead, next = null;
    while(lists.length) {
        lists.forEach((list, index, array) => {
            console.log('list', list);
            if (!list) {
                array.splice(index, 1);
                console.log(array);
            } else if (next === null || list.val < next.val) {
                next = list;
            }
        });
        if (next) {
            lists.forEach((list, index, array) => {
                if (list === next) {
                    array.splice(index, 1, list.next);
                }
            });
            current.next = next;
            current = next;
            next = null;
        } else {
            break;
        }
    }
    return dummyHead.next;
};

let a = mergeKLists([n00, n10, n20]);
