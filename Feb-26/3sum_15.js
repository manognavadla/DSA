/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    var res=[];
    let n=nums.length;
    for(let i=0;i<n;i++){
        if(i>0 && nums[i]===nums[i-1]) continue;
        let t= 0-nums[i];
        let j=i+1, k=n-1;
        while(j<k){
            let s=nums[j]+nums[k];
                if(t===s){
                    res.push([nums[i],nums[j],nums[k]]);
                    j++;k--;
                    while (j < k && nums[j] === nums[j - 1]) j++;
                    while (j < k && nums[k] === nums[k + 1]) k--;
                }
                else if(s<t) j++;
                else k--;
        }

    }
                return res;

};