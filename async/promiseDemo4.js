const mata1 = new Promise((res, rej) => {
  console.log("Executor callback triggered by Promise constructor: mata1");
  setTimeout(() => {
    console.log("Timer of mata1 done");
    let r1 = Math.floor(Math.random() * 100);
    // console.log(r1);
    if (r1 % 2 === 0) {
      res(r1);
    } else {
      rej(r1);
    }
  }, 500);
});

mata1.then(
  function a(r1) {
    console.log("mata1 is resolved at " + r1);
  },
  function b(r1) {
    console.log("mata1 is rejected at " + r1);
  }
);

setTimeout(() => {
  console.log("timer 1 done");
}, 2000); // timer of 2 sec

const mata = new Promise((res, rej) => {
  console.log("Executor callback triggered by Promise constructor: mata");
  setTimeout(() => {
    let r1 = Math.floor(Math.random() * 100);
    // console.log(r1);
    if (r1 % 2 === 0) {
      res(`<fullfiled> ` + r1);
    } else {
      rej(` <rejected> ` + r1);
    }
  }, 4000);
});

mata.then(
  function f(v) {
    console.log(v, "case-1 & executing f");
  },
  function g(v) {
    console.log(v, "case-1  & executing g");
  }
);

mata.then(
  function h(v) {
    console.log(v, "case-2 & execution h");
  },
  function i(v) {
    console.log(v, "case-2  & executing i");
  }
);

for (let i = 0; i < 1000000; i++) {}
