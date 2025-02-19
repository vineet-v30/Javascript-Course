var user = {
    firstName : "Vineet",
    lastName : "Vitonde",
    role : "Admin",
    loginCount : 32,
    email : "vineetvitonde@gmail.com",
    facebookSignedIn : true,
    courseList: [],
    buyCourse: function (courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function (){
        return '${this.firstName} is enrolled in total of ${this.courseList.lenggth} courses';
    },
};
var courseList =true;
console.log(user.firstName); 
console.log(user.getCourseCount());
user.buyCourse("React JS course")
console.log(user.getCourseCount());