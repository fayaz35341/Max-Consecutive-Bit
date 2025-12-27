/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    maxConsecBits(arr) {
        // Code Here
        let c=0
        let r=0
        let maxi=0
        for (let i=0;i<arr.length;i++){
            if (arr[i]===1){
                c++
                r=0
                maxi=Math.max(maxi,c)
            }
            else if (arr[i]===0){
                c=0
                r++
                maxi=Math.max(maxi,r)
            }
        }
        return maxi
    }
}
