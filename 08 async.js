const uno = () => {
    console.log("I am one");
};
const dos = () => {
    setTimeout(() => {
        console.log("Wooohoo");
    },3000);
    console.log("I am two");
};
const tres = () => {
    console.log("I am Three");
}; 

uno();
dos();
tres();