/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l=0,r=0;
    let maxLen=0;
    let map= new Map();
    while(r<s.length){
         map.set(s[r], (map.get(s[r]) ?? 0) + 1);
         while(map.get(s[r])>1){
            map.set(s[l], map.get(s[l])-1);
            if(map.get(s[l])===0) map.delete(s[l]);
            l++;
         }
         maxLen=Math.max(maxLen, r-l+1)
        r++;
    }
    return maxLen;
};