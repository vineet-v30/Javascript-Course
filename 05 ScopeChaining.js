var name = "Vineet";

console.log("Line number 3",name);

function sayName() {
    var name = "Mr V";
    console.log("Line number 7",name);
    sayNameTwo();

    function sayNameTwo() {
        var name = "Mr. VV"
        console.log("Line number 11",name);
    }
}

sayName()