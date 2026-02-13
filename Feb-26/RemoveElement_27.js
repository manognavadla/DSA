/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let fil= nums.filter(x=> x!==val );
    for(let i=0;i<fil.length;i++){
        nums[i]=fil[i];
    }
    console.log(nums)
    return fil.length;
};