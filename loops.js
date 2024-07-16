// while loop starts here

let a=0;
console.log("while loop statrts here");
while (a<14) {
    console.log(a);
    a++;
}
console.log("while loop ends here");

//while with break

let b=0;
console.log("while loop with break at 5 statrts here");
while (b<14) {
    if(b==5)break;
    console.log(b);
    b++;
}
console.log("while loop with break at 5 ends here");

//while with continue

let c=0;
console.log("while loop with continue at 5 statrts here");
while (c<=14) {
    if(c==5)continue;
    console.log(c);
     c++;
}
console.log("while loop with continue at 5 ends here");


// for loop starts here 
console.log("for loop srarts here");

for (let i=10; i>-5; i--){
    console.log(i);
}

console.log("for loop ends here");

//for loop with break

console.log("for loop with break srarts here");

for (let d=10; d>-5; d--){
    if(d==3)break;
    console.log(d);
}

console.log("for loop with break ends here");

//for loop with continue

console.log("for loop with continue srarts here");

for (let e=10; e>-5; e--){
    if(e==3)continue;
    console.log(e);
}

console.log("for loop with continue ends here");


//do while loop starts here

console.log("do while loop starts here");

let f=-1;
do{
    console.log(f++)
}
while(f<5);

console.log("do while loop ends here");


//do while loop with break

console.log("do while loop with break starts here");

let g=-1;
do{
    if(g==3)break;
    console.log(g++)
}
while(g<5);

console.log("do while loop with break ends here");


//do while loop with continue

console.log("do while loop with continue starts here");

let h=-1;
do{
    if(h==3)continue;
    console.log(h++)
}
while(h<5);

console.log("do while loop with continue ends here");




















