/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    mergeSort(nums, 0,nums.length-1);
    return nums;
};
var mergeSort= function(nums, low, high){
    if(low>=high) return;
    let mid = Math.floor((low + high) / 2);
    mergeSort(nums, low, mid);
    mergeSort(nums,mid+1, high);
    merge(nums,low,mid,high)
}
var merge= function(nums, low, mid, high){
    if(low>=high) return;
    let sorted=[];
        let l=low,r=mid+1,k=0,size=high-low+1;
    while(l<=mid && r<=high) sorted[k++]=nums[l]<nums[r]?nums[l++]:nums[r++];
    while(l<=mid) sorted[k++]=nums[l++];
    while(r<=high) sorted[k++]=nums[r++];
    for (k = 0; k < size; k++)
		nums[k + low] = sorted[k];
}