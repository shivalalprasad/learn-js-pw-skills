console.log("set time out at 5000ms started");
setTimeout(() => {
  console.log("set time out at 5000ms ended");
}, 5000);

//  here the both set timout are runs parellely with the help of event loop & runtime environment

// if we use any JavaScript native code that runs in call stack it blocks the event loop to execute the code that not natively present in JavaScript

console.log("set time out at 2000ms started");
setTimeout(() => {
  console.log("set time out at 2000ms ended");
}, 2000);
