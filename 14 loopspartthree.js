const names =["Youtube","Facebook","Instagram","Netflix","Amaazon"];

for (const n of names){
    console.log(n);
}

const symbols = {
    yt:"Youtube",
    fb:"Facebook",
    ig:"Instagram",
    nf:"Netflix",

}

for(const n in symbols){
    console.log('Key is : ${n} and value is: ${symbols[n]'); 
}