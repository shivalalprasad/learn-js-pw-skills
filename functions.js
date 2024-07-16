// Basic function
function compliments() {
    console.log(`Hey Shivalal you are so nice`);
    console.log(`Hey Shivalal you have good comunivation skills`);
    console.log(`Hey Shivalal you are multitalented`);
    console.log(`Hey Shivalal you are marvellous in coding`);
}

compliments();

// Function with parameters 
    // Function with single parameter
function complimentsParams(name) {
    console.log(`Hey ${name} you are so nice`);
    console.log(`Hey ${name} you have good comunivation skills`);
    console.log(`Hey ${name} you are multitalented`);
    console.log(`Hey ${name} you are marvellous in coding`);
}

complimentsParams("Prasad");


    // Function with multiple parameters
        // Function with additional parameter

function sum(a,b,c=0) {
    return a+b+c;
}

function zgiven(z) {
    if (z==0){
        return(` is r =`);
    }else{
        return(` and ${z} is r =`);
    }
}

function r(x,y,z=0) {
    console.log(`Sum of ${x} and ${y} ${zgiven(z)} ${sum(x,y,z)}`);
}
r(44,12)
r(21,78,6)

// Function with multiple parameters
    // Function with multiplication parameter

{function multiplication(a,b,c=1) {
    return a*b*c;
}

function zgiven(z) {
    if (z==1){
        return(` is r =`);
    }else{
        return(` and ${z} is r =`);
    }
}

function r(x,y,z=1) {
    console.log(`multiplication of ${x} and ${y}${zgiven(z)} ${multiplication(x,y,z)}`);
}
r(10,5)
r(10,8,6)}


