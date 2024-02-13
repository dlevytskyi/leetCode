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

function hasCycle(head: ListNode | null): boolean {

  //build in solution
  // try {
  //     let test = JSON.stringify(head);
  // } catch {
  //     return true;
  // }
  // return false;

  if (head == null || head.next == null) return false;

  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {

    fast = fast?.next?.next;
    slow = slow.next;

    if (slow == fast) return true;
  }

  return false;
};