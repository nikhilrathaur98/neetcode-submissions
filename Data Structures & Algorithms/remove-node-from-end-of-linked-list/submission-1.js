/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        

        let x = head
        let len = 1
        while(x.next !== null){
            x = x.next
            len++
        }
        console.log(len)
        if(len === 1){
            return null
        }
        console.log("len",len)
        if(len-n === 0){
            return head.next
        }
        let y = head
        for(let i=1;i<len-n;i++){
            y = y.next
        }
        y.next = y.next.next
        return head 
    }
}
