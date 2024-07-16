// while loop starts here

let a=0;
console.log("while loop starts here");
while (a<14) {
    console.log(a);
    a++;
}
console.log("while loop ends here");

//while with break

let b=0;
console.log("while loop with break at 5 starts here");
while (b<14) {
    console.log(b);
    b++;
    if (b==5) {
        break;
    };
}
console.log("while loop with break at 5 ends here");

//while with continue

let c=0;
console.log("while loop with continue at 5 starts here");
while (c<=154) {
    c++;
    console.log(c);
    if(c==5) continue;
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
    console.log(d);
    if(d==3)break;
}

console.log("for loop with break ends here");

//for loop with continue

console.log("for loop with continue srarts here");

for (let e=10; e>-5; e--){
    console.log(e);
    if(e==3)continue;
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
    console.log(h++)
    if(h==3)continue;
}
while(h<5);

console.log("do while loop with continue ends here");




















