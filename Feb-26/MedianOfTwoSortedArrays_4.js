/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var res=[];
    let l=0,r=0;
    let one=nums1.length,two= nums2.length;
    while(l<one && r<two){
        if(nums1[l]<nums2[r]){
            res.push(nums1[l]);
            l++;
        }
        else if(nums1[l]>nums2[r]){
            res.push(nums2[r]);
            r++;
        }
        else{
            res.push(nums1[l]);
            res.push(nums2[r]);
            l++;r++;
        }
    }
    while(l<one){
        res.push(nums1[l]);
        l++;
    }
    while(r<two){
        res.push(nums2[r]);
        r++;
    }
    let len= res.length;
    return (len&1)? res[Math.floor(len/2)] : (res[Math.floor(len/2)]+res[Math.floor(len/2)-1])/2;
};