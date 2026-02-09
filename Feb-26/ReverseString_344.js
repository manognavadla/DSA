/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var neg= x<0? true: false;
    x = Math.abs(x);
     let rev=0;
     const MAX = 2 ** 31 - 1;
    while(x>0){
        rev=(rev*10) + (x%10);
        if(rev>MAX) return 0;
        x=Math.floor(x/10);
       
    }
    return neg?(rev*(-1)):rev;
};