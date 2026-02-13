/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows===1 || s.length<numRows) return s;
    let sbs= new Array();
    for(let i=0;i<numRows;i++) sbs.push([]);
    let down= false,j=0;
    for(let i=0;i<s.length;i++){
        sbs[j].push(s[i]);
        if(j===0 || j===numRows-1) down=!down;
        j+=down? 1:-1;
    }
    return sbs.flat().join("");
};