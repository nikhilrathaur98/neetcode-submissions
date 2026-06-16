class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length - 1, max = 0
        
        while(l<r){
            console.log("l=",l,"r=",r)
            console.log(r-l)
            console.log(Math.min(heights[l],heights[r]))
            console.log("product = ",r-l * Math.min(heights[l],heights[r]))
            if(((r-l) * Math.min(heights[l],heights[r]))>max){
                max = (r-l) * Math.min(heights[l],heights[r])
                console.log(max)
            }
            console.log(heights[l+1]>heights[r-1])
            if(heights[l]<=heights[r]){
                l++
            }else{
                r--
            }
        }
        return max
    }
}
