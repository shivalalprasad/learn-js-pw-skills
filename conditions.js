// conditionsns that run a block of code on the basis of the conditions

// example youtube preminium
let user="free"  // if you are a preminum user don't do anything
user="paid" // if you are a free user comment this redeclaration statement/line

function free(user) {
console.log("show free video content with Ads");
console.log("show free music content with Ads");
}

function paid(user) {
console.log("show free & Preminum video content Without Ads");
console.log("show free & Preminum Music content Without Ads");
}

if(user=="free"){
  console.log("Youtube Start")
  free();
}
else if (user == "paid"){
  console.log("Youtube Start")
  paid();
}

console.log("Youtube end");






