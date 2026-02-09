/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMax= Array(height.length);
    let rightMax= Array(height.length);
    let lM=0;
    for(let i=0;i<height.length;i++){
        lM= Math.max(lM, height[i]);
        leftMax[i]=lM;
    }
    let rM=0;
    for(let j=height.length-1;j>=0;j--){
        rM=Math.max(rM,height[j]);
        rightMax[j]=rM;
    }
    let res=0;
    for(let i=0;i<height.length;i++){
        let l=leftMax[i];
        let r= rightMax[i];
        let m= Math.min(l,r);
        res+=Math.max(0,m-height[i])
    }
    return res;
};