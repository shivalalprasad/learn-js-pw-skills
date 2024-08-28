function manualException() {
  const r1 = Math.floor(Math.random() * 100);

  if (r1 % 2 === 0) {
    // random number is even
    console.log(r1+` random number is odd`);
  } else {
    // random number is odd
    console.error(r1+` random number is odd`);
    throw new Error(r1+" random number is odd");
  }
}

manualException();
