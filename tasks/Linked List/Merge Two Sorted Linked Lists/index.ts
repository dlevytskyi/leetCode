// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     val: number
//  *     next: ListNode | null
//  *     constructor(val?: number, next?: ListNode | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.next = (next===undefined ? null : next)
//  *     }
//  * }
//  */

// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     if (list1 == null) {
//         return list2;
//     }
//     if (list2 == null) {
//         return list1;
//     }
//     let mergedList = new ListNode();
//     let next1 = list1;
//     let next2 = list2;
//     let curr = mergedList;
//     while(next1 != null || next2 != null) {
//         if (next1 != null && next2 != null && (next1.val < next2.val)) {
//             if (mergedList.val == null) {
//                 mergedList.val = next1.val;
//             } else {
//                 curr.next = new ListNode(next1.val);
//                 next1 = next1.next;
//                 console.log('next 1 ', next1);
//             }
//         } else {
//             if (next2 != null) {
//                 if (mergedList.val == null) {
//                     mergedList.val = next2.val;
//                 } else {
//                     curr.next = new ListNode(next2.val);
//                     next2 = next2.next;
//                     console.log('next 2 ', next2);  
//                 } 
//             } else {
//                 console.log('test')
//                 curr.next = new ListNode(next1.val);
//                 next1 = next1.next;
//                 console.log('next 1 ', next1);
//             }

//         }
//         curr = curr.next;
//         console.log('mergedList', JSON.stringify(mergedList))
//     }
//     return mergedList.next;
// };


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let current = new ListNode();
  let head = current;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 || list2;
  return head.next;
};