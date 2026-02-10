/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
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