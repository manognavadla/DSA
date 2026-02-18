/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n= needle.length;
    let i=0;
    while(i<haystack.length){
        if((haystack[i]===needle[0]) &&(haystack.substring(i,i+n)===needle))
        {
            return i;
        }
        i++;
    }
    return -1;
};