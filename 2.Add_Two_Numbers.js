/**
 * https://leetcode.com/problems/add-two-numbers/description/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1 && l2) {
    l1 = new ListNode(0);
  } else if (l1 && !l2) {
    l2 = new ListNode(0);
  }
  var sum = l1.val + l2.val;
  if (sum > 9) {
    sum -= 10;
    if (!l1.next) {
      l1.next = new ListNode(0);
    }
    l1.next.val += 1;
  }
  var newNode = new ListNode(sum);
  if (!l1.next && !l2.next) {
    newNode.next = null;
    return newNode;
  } else {
    newNode.next = addTwoNumbers(l1.next, l2.next);
    return newNode;
  }
};