const mata = new Promise((res, rej) => {
  setTimeout(() => {
    console.log(`timer of mata triggered`);
    let r1 = Math.floor(Math.random() * 100);
    console.log(r1);
    if (r1 % 2 === 0) {
      res(r1);
    } else {
      rej(r1);
    }
  }, 5000);
});

const mata1 = mata.then(
  function f(v) {
    console.log(v, "case-1 & executing f");
  },
  function g(v) {
    console.log(v, "case-1  & executing g");
  }
);

const mata2 = mata.then(
  function h(v) {
    console.log(v, "case-2 & execution h");
  },
  function i(v) {
    console.log(v, "case-2  & executing i");
  }
);


// here all .then returns a promise 

// mata1,mata2 returns promise by the parent promise mata

console.log(mata);
console.log(mata1);
console.log(mata2);

setTimeout(() => {
  console.log(mata);//fullfilled:r1
  console.log(mata1);//fullfilled:undefined
  console.log(mata2);//fullfilled:undefined 
}, 5000);
