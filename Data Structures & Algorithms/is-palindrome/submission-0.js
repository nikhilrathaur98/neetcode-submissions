class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.split("")
        console.log(str)
        let l = 0
        let r = str.length - 1

        function isAlphaNum(x){
        let y = x.toLowerCase()
        if((y.charCodeAt(0)>="0".charCodeAt(0) && y.charCodeAt(0)<="9".charCodeAt(0))||
        (y.charCodeAt(0)>="a".charCodeAt(0) && y.charCodeAt(0)<="z".charCodeAt(0))
        ){
            return true
        }else{
            return false
        }
        }

        while(r>l){
            if(!isAlphaNum(s[l])){
                l++
            }else if(!isAlphaNum(s[r])){
                r--
            }else if(s[l].toLowerCase() === s[r].toLowerCase()){
                l++
                r--
            }else{
                return false
            }
        }
        return true
    }

    
}
