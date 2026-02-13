/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows===1) return [[1]];
    let res=[];
    for(let i=0;i<numRows;i++){
        res.push([]);
        res[i][0]=1;
        res[i][i]=1;
        for(let j=1;j<i;j++){
            res[i][j]=res[i-1][j-1]+res[i-1][j];
        }
    }
    return res;
};