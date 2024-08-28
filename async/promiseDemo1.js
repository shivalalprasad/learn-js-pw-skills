// const pr = new Promise((res, rej) => {
//     console.log("Executor callback triggered by Promise constructor");
//     for(let i = 0; i < 10000000000; i++) {}
// });

// console.log("Created the promise object");
// console.log(pr);

const mata = new Promise((res, rej) => {
  console.log("Executor callback triggered by Promise constructor");
  for (let i = 0; i < 10000000; i++) {}
});

console.log("Created the promise object");
console.log(mata); //here it remain in penning status due to we didn't fullfiled/rejected it

const mataF = new Promise((res, rej) => {
  console.log("Executor callback triggered by Promise constructor");
  for (let i = 0; i < 100; i++) {}
  res(`mataF => fullfilled`);
});

console.log(mataF);

const mataR = new Promise((res, rej) => {
  console.log("Executor callback triggered by Promise constructor");
  for (let i = 0; i < 100; i++) {}
  rej(`mataR => rejected`);
});

console.log(mataR);
