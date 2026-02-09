/**
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var row=new Array(matrix.length).fill(false);
    var col=new Array(matrix[0].length).fill(false);
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j< matrix[0].length;j++){
            if(matrix[i][j]==0){
                row[i]=true;
                col[j]=true;
            }
        }
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(row[i] || col[j]) matrix[i][j]=0;
        }
    }
    return matrix;
};