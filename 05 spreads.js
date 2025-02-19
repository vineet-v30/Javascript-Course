//var returnedValue = Math.max[2,5,7,4,2,9,8];4
//console.log(returnedValue); // 9

//var myObj = {}
//Object.assign(myObj, {a:1,b:2,c:3},{z:9,y:8, x:7});
//console.log(myObj); // {a: 1, b: 2, c:

function sumOne(a,b){
    return a + b;

}
var myA= [5,4];
//console.log(sumOne(...myA)); // spread operator

function sumTwo(...args){
    let sum = 0;
    for (const arg of args){
        sum += arg;
    }
    return sum;
}
console.log(sumTwo(2,3,1,5,7));