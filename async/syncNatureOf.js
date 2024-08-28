console.log(`forloop 1 started`);
for (let i = 0; i < 10000000000; i++) {
  // first this for loop will execute then the second for loop will execute
}
console.log(`forloop 1 ended`);

console.log(`forloop 2 started`);
for (let i = 0; i < 10000; i++) {}
console.log(`forloop 2 ended`);
