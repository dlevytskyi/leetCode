/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head == null) return null;  //return null if input data is null

  let length = 0;   //length of linked list
  let tmp = head;
  while (tmp != null) {
    length++;
    tmp = tmp.next;
  }


  length = length - n;
  if (length == 0) {  //case if linked list length equals N remove first element
    tmp = head.next;
    head.next = null
    head = null
    return tmp;
  }

  let curr = head;
  let prev = null;

  while (length > 0) {
    prev = curr;
    curr = curr.next;
    length--;
  }

  prev.next = curr.next;
  curr.next = null;
  curr = null;
  return head;
};