/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var memo=[];
    let n= triangle.length;
    for(let i=0;i<n;i++) memo.push([]);
    function dfs(row, col){
        if(row===n-1) return triangle[row][col];
        if(memo[row][col]!==undefined) return memo[row][col];
        let left= dfs(row+1,col);
        let right= dfs(row+1,col+1);
        return memo[row][col]= triangle[row][col]+ Math.min(left,right);
    }
    return dfs(0,0);
};