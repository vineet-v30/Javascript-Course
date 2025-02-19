const user =["Vineet", 3,"admin"];
// var role = user[2];
// var role = user[0];  

//var [name,courseCount,role]=user;
//console.log(role);

const MyUser = {
    name:"Vineet",
    courseCount:3,
    role:"Admin"
};
console.log(MyUser.courseCount);

const{ name,courseCount,role} = MyUser;