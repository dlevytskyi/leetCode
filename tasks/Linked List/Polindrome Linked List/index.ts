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

function isPalindrome(head: ListNode | null): boolean {
  let fast = head;
  let slow = head;

  while (fast != undefined && fast.next != undefined) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let prev = null;
  while (slow) {//123
    let tmp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = tmp;
  }

  let left = head;
  let right = prev;
  while (right != undefined) {
    if (left.val != right.val) {
      return false;
    }
    left = left.next;
    right = right.next
  }
  return true;
};