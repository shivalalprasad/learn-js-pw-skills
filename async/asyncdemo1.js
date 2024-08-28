function createTimer(time, timerId) {
  console.log("Creating a new timer with id", timerId);
  setTimeout(() => {
    console.log(`Timer with id ${timerId} is done`);
  }, time);
  console.log("Successfully created a new timer with id", timerId);
}

console.log("Starting the code");
createTimer(2000, 1); // Timer 1 will take 2 seconds
createTimer(0, 2); // Timer 2 will execute immediately

console.log("Starting a loop");
//   by running the loop the callstack is busy by doinng this loop
for (let i = 0; i < 10000000000; i++) {
  // Simulate a long-running task
}
console.log("Loop is done");
//   after loop is done the timer is executed by event loop
console.log("Last line of code done");
