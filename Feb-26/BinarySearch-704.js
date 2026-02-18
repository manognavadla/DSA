/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length===0) return -1;
    if(nums.length===1 && nums[0]===target) return 0;
    if(nums.length===1 && nums[0]!==target) return -1;

    let l=0, r=nums.length-1;
    while(l<=r){
        let mid= Math.floor((l+r)/2)
        if(nums[mid]===target) return mid;
        else if(nums[mid]>target) r=mid-1;
        else l=mid+1;
    }
    return -1;
};