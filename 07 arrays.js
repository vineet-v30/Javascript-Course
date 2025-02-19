var countries =["India", "USA", "China", "Japan", "Brazil"];

var states = new Array("Maharastra","Delhi","Punjab","Madhya Pradesh");

console.log(states[0]);

console.log(states.length);
states [1] = "kerla";
console.log(states);

var user = ["Vineet", "vineetvitonde@gmail.com",21,20,true];
console.log(user);

user.pop();
console.log(user);

user.pop();
user.pop();
console.log(user);
user.unshift("NEW VALUE");
console.log(user);
user.shift()
console.log(user);

console.log(user.indexOf("new"));

console.log(Array.from("Vineet"));