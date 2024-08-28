const mata = new Promise((res, rej) => {
  console.log("Executor callback triggered by Promise constructor");
  let r1 = Math.floor(Math.random() * 100);
  if (r1 % 2 === 0) {
    res(`<fullfiled> ` + r1);
  } else {
    rej(r1);
  }
});

console.log("Created the promise object");
console.log(mata);
