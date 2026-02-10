/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;

    let acc = null;
    for (let i = 0; i < lists.length; i++) {
        acc = mergeTwoLists(acc, lists[i]);
    }
    return acc;
};
var mergeTwoLists = function(list1, list2) {
    if(list1===null) return list2;
    else if(list2===null) return list1;
    let head= new ListNode();
    let temp=head, temp1=list1, temp2=list2;
   while (temp1 !== null && temp2 !== null) {
        if (temp1.val <= temp2.val) {
            temp.next = new ListNode(temp1.val);
            temp1 = temp1.next;
        } else {
            temp.next = new ListNode(temp2.val);
            temp2 = temp2.next;
        }
        temp = temp.next;
    }

    while (temp1 !== null) {
        temp.next = new ListNode(temp1.val);
        temp1 = temp1.next;
        temp = temp.next;
    }

    while (temp2 !== null) {
        temp.next = new ListNode(temp2.val);
        temp2 = temp2.next;
        temp = temp.next;
    }

    return head.next;
};