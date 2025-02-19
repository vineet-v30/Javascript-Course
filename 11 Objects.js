var user = {
    firstName : "Vineet",
    lastName : "Vitonde",
    role : "Admin",
    loginCount : 32,
    email : "vineetvitonde@gmail.com",
    facebookSignedIn : true

};
console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 44;
console.table(user);