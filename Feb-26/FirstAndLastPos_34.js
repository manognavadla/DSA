/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 34. Find First and Last Position of Element in Sorted Array
Solved
Medium
Topics
premium lock icon
Companies
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
 */
var searchRange = function(nums, target) {
    let l=-1,r=-1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            l=r=i;
            while(r<nums.length){ if(nums[r]===target)r++; else break;}
            break;
        }
    }
    return (l===-1)? [-1,-1]: [l,r-1];
};
