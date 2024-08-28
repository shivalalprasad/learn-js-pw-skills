const concepts = [
  `async`,
  `async/await`,
  `promise`,
  `fetch`,
  `then`,
  `try`,
  `catch`,
  `finally`,
];

function myMap(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

console.log(
  myMap(concepts, function g(element) {
    return element.toUpperCase();
  })
);
