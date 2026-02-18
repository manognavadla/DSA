/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let t= [...new Set(s.match(/\d/g))];
    if(t.length===0 || t.length===1) return -1;
    t=t.sort((a,b)=> b-a);
    return Number(t[1]);

};