class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        let x = nums.sort((a, b) => a - b);
        console.log(x)
        let s = []
        for(let i=0;i<nums.length;i++){
            let l = i+1
            let r = nums.length - 1
            while(r>l){
                if(nums[i]+nums[l]+nums[r] === 0 ){
                    let triplet = [nums[i],nums[l],nums[r]]
                    s.push(triplet.toString())
                    l++
                    r--
                }
                if(nums[i]+nums[l]+nums[r]> 0){
                    r--
                }
                if(nums[i]+nums[l]+nums[r] < 0){
                    l++
                }
            }
        }
        
        let y= [... new Set(s)]
        console.log(y)
        let sol = []
        for(let i=0;i<y.length;i++){
            
            sol.push(y[i].split(","))
        }
        return sol
    }
}
