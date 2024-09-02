const iterator = fetchNextElement([1, 2, 3, 4, 5]); // {next: function} 
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function fetchNextElement(arr) {
let idx = 0;
    function next() {
        // some logic
        if(idx >= arr.length) {
            return {value: undefined, done: true};
        }
        const newElement = arr[idx];
        idx++;
        return {value: newElement, done: false};
    }

    return {next};
}
