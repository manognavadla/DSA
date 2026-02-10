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
  let len=0;
  let temp=head;
  while(temp!=null){
    len++;
    temp=temp.next;
  }  
  if(len===n) return head.next;
temp=head;
let nf= len-n;
for(let i=1;i<nf;i++){
    temp=temp.next;
}
temp.next = temp.next.next
return head;
};