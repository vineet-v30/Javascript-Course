//import User from "./06 classesjs"

const User = require("./06 classes.js");

const vineet = new User("Vineet", "vineetvitonde@gmail.com")

console.log(vineet.getInfo().email);

vineet.enrollCourse("React Bootcamp");
vineet.enrollCourse("Angular Bootcamp");

console.log(vineet.getCourseList());

let courses = vineet.getCourseList();

courses.forEach((c)=> console.log(c));