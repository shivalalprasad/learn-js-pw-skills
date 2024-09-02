function* nextelem() {
    console.log("inside generator");
    yield 100;
    console.log("after yield 100");
    yield 99;
    console.log("after  yield 99");
    yield 87;
    console.log("after yield 87");
    yield -1;
    console.log("after  yield -1");
}

const elem = nextelem();
console.log(elem.next());
console.log("out");
console.log(elem.next());
console.log("out");
console.log(elem.next());
console.log("out");
console.log(elem.next());
console.log("out");
console.log(elem.next());
console.log("out");
console.log(elem.next());
console.log("out");
console.log(elem.next());
console.log("out");
console.log(elem.next());
console.log("out");



