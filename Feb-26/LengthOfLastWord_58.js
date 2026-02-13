/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var strs= s.trim().split(" ");
    return strs[strs.length-1].length;
};