// IMP !!

  // Function declarations are scanned and made available
  // Variable declarations are scanned and made undefined

//var num = 2;

//function sayMe(){
  //  console.log("Say me");
//}
//sayMe();

function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}

tipper("80");

var bigTipper = function (a){
    var bill = parseInt(a);
    console.log(bill + 15);

}
bigTipper("200");

var name = "Vineet";
console.log(name);

console.log(name);
var name = "Vineet";
function sayName() {
    var name ="MR.Vee";
    console.log(name);
}
sayName();
console.log(name);